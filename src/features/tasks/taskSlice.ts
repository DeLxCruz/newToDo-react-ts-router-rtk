import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { Task } from "../../interfaces/task.interface"

const initialState: Task[] = []

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.push(action.payload)
        },
        editTask: (state, action: PayloadAction<Task>) => {
            const { id, title, description } = action.payload;
            const taskFound = state.find((task) => task.id === id);
            if (taskFound) {
                taskFound.title = title;
                taskFound.description = description;
            }
        }, 
        deleteTask: (state, action: PayloadAction<string>) => {
            const taskFound = state.findIndex((task) => task.id === action.payload);
            state.splice(taskFound, 1);
        }
    }, 
})

export const { addTask, deleteTask, editTask } = taskSlice.actions

export default taskSlice.reducer

