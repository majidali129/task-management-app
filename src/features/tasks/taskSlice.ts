
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../../store';

type TaskStatus = 'pending' |  'completed' | 'inProgress' 
interface TaskType {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    status: TaskStatus
}

type initialStateType = {
    tasks: Array<TaskType | []>
}

const initialState: initialStateType = {
   tasks: []
}
export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

        addNewTask: (state, action: PayloadAction<TaskType>) => {
            state.tasks.push(action.payload);         
        },

        deleteTask: (state, action: PayloadAction<string>) => {
            // state.tasks = state.tasks.filter(task => task.id != action.payload)
        },

        deleteAllTasks: (state) => {
            state.tasks = [];
        }
    }
});

export const {addNewTask, deleteTask, deleteAllTasks} = taskSlice.actions;
export default taskSlice.reducer

// by convention, these are redux actions
export const getTasks = (state: RootState) => state.tasks.tasks;
