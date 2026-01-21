import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5005/users";

export interface User {
  id?: number;
  name?: string;
  username: string;
  email?: string;
  password: string;
  phoneNumber?: string;
}

interface AuthState {
  currentUser: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  currentUser: null,
  status: "idle",
  error: null,
};

export const signUpUser = createAsyncThunk<User, User, { rejectValue: string }>(
  "auth/signUpUser",
  async (newUser, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newUser);
      return response.data;
    } catch {
      return rejectWithValue("Sign-up failed");
    }
  }
);

export const signInUser = createAsyncThunk<User, User, { rejectValue: string }>(
  "auth/signInUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}?username=${credentials.username}`);
      const user = response.data[0];
      if (user && user.password === credentials.password) return user;
      return rejectWithValue("Invalid username or password");
    } catch {
      return rejectWithValue("Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut(state) {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Sign Up
      .addCase(signUpUser.pending, (state) => { state.status = "loading"; })
      .addCase(signUpUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      // Sign In
      .addCase(signInUser.pending, (state) => { state.status = "loading"; })
      .addCase(signInUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
