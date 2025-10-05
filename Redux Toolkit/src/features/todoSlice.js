import { createSlice,nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: '1',Text: 'Learning Redux Toolkit'}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                Text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state,action) => {
            const { id,Text } = action.payload;
            const existingTodo = state.todos.find((todo) => todo.id === id);
            if (existingTodo) {
                existingTodo.Text = Text;
            }
        },
    }
})

export const { addTodo,removeTodo,updateTodo } = todoSlice.actions

export default todoSlice.reducer