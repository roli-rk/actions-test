import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTasks } from '../state/tasks.actions';

@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private store: Store) {}

  initializeTasks() {
    const initialTasks = [{ id: 1, name: 'Task 1' }, { id: 2, name: 'Task 2' }];
    this.store.dispatch(loadTasks({ tasks: initialTasks }));
  }
}
