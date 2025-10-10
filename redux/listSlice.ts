import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5005/lists";

export interface List {
  id: number;
  name: string;
  category: string;
  image?: string;
  notes?: string;
}

interface ListState {
  lists: List[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ListState = {
  lists: [],
  status: "idle",
  error: null,
};

export const loadLists = createAsyncThunk("lists/loadLists", async () => {
  const response = await axios.get(API_URL);
  return response.data as List[];
});

export const createListAsync = createAsyncThunk(
  "lists/createList",
  async (payload: Omit<List, "id">) => {
    const newList: List = {
      id: Date.now(), // or generated from server
      ...payload,
    };
    // add to backend or localStorage
    return newList;
  }
);

export const updateListAsync = createAsyncThunk(
  "lists/updateListAsync",
  async ({ id, payload }: { id: number; payload: Partial<List> }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, payload);
      return response.data as List;
    } catch {
      return rejectWithValue("Failed to update list item");
    }
  }
);

export const deleteListAsync = createAsyncThunk(
  "lists/deleteListAsync",
  async (id: number, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch {
      return rejectWithValue("Failed to delete list item");
    }
  }
);

const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadLists.pending, (state) => { state.status = "loading"; })
      .addCase(loadLists.fulfilled, (state, action: PayloadAction<List[]>) => {
        state.status = "succeeded";
        state.lists = action.payload;
      })
      .addCase(loadLists.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(createListAsync.fulfilled, (state, action: PayloadAction<List>) => {
        state.lists.push(action.payload);
      })
      .addCase(updateListAsync.fulfilled, (state, action: PayloadAction<List>) => {
        const index = state.lists.findIndex(l => l.id === action.payload.id);
        if (index !== -1) state.lists[index] = action.payload;
      })
      .addCase(deleteListAsync.fulfilled, (state, action: PayloadAction<number>) => {
        state.lists = state.lists.filter(l => l.id !== action.payload);
      });
  },
});

export default listSlice.reducer;
