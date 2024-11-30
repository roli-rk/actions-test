import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

export const TasksActions = createActionGroup({
  source: 'Tasks',
  events: {
    'Load Tasks': emptyProps(),
    
    
  }
});

export const loadTasks = createAction('[Tasks] Load Tasks', props<{ tasks: { id: number; name: string }[] }>());
export const addTask = createAction('[Task] Add Task', props<{ task: string }>());
export const removeTask = createAction('[Task] Remove Task', props<{ id: number }>());