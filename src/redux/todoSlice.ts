import { createSlice } from "@reduxjs/toolkit";
import uuid from "uuid";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {

    add: (state, action: PayloadAction<>) =>  {
      const newTodo = {
        id: uuid.v4(),
        title: action.payload,
        completed: false};
        state.push(newTodo);


    },
    remove:()=>{

    }
  },
});

export default todoSlice.reducer;
export const { add, remove } = todoSlice.actions;