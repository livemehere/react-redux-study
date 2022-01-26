import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: Date.now(), text: "go work" }];
const todoReducer = createSlice({
  name: "todoReducer",
  initialState,
  reducers: {
    AaddTodo(state, action) {
      state.push({ id: Date.now(), text: action.payload });
    },
    AremoveTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { AaddTodo, AremoveTodo } = todoReducer.actions;
export default todoReducer.reducer;
