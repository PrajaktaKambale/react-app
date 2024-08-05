import { createSlice, nanoid } from "@reduxjs/toolkit";

//Initial state can be array/object anything
const initialState = {
  todos: [{ id: 1, text: "Hello Redux" }],
};

export const todoSlice = createSlice({
  //name the slices
  name: "todo",
  initialState,

  //declaretion + definition
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      //store the todos
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

//export reducers so that can be used by store
//part 1  individual
export const { addTodo, removeTodo } = todoSlice.actions;

//part 2 all
export default todoSlice.reducer;
