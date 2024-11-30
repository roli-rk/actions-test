import { createReducer, on } from '@ngrx/store';
import { addTask, removeTask, loadTasks } from './tasks.actions';

export interface Task {
  id: number;
  name: string;
}

export interface TasksState {
  tasks: Task[];
}

export const initialState: TasksState = {
  tasks: []
};

export const tasksReducer = createReducer(
  initialState,
  on(loadTasks, (state, { tasks }) => ({ ...state, tasks })),
  on(addTask, (state, { task }) => ({ ...state, tasks: [...state.tasks, { id: state.tasks.length + 1, name: task }] })),
  on(removeTask, (state, { id }) => ({ ...state, tasks: state.tasks.filter(task => task.id !== id) }))
);
