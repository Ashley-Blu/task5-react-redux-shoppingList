import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface List{
    id: number;
    name: string;
    category: string;
    image: string;
    notes: string;
}

interface ListState{
    lists: List[];
}

const initialState: ListState = {
    lists: [
        {id: 1, name: "Ice cream", category: "Treats", image: "picture of an ice cream", notes: "for kids"} ,
        {id: 2, name: "Ice cream", category: "Treats", image: "picture of an ice cream", notes: "for kids"},
        {id: 3, name: "Ice cream", category: "Treats", image: "picture of an ice cream", notes: "for kids"},
    ],
};

const listSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<string>) =>{
            const nextId = 
            state.lists.length > 0
            ? state.lists[state.lists.length -1].id +1
            : 1;

            const newItem: List ={
                id: nextId,
                name: action.payload,
                category:"default",
                image: "default",
                notes: 'default'
            };

            state.lists.push(newItem);
        },

        removeItem: (state,action: PayloadAction<number>) => {
            state.lists = state.lists.filter(
                (list) => list.id !== action.payload
            );
        },
    },

});

export const { addItem, removeItem } = listSlice.actions;
export default listSlice.reducer;