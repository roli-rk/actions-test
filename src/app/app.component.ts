import { Component } from '@angular/core';
import { TaskService } from './tasks/tasks.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { CommonModule } from '@angular/common';
import { addTask, removeTask } from './state/tasks.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl:"app.component.scss",
  imports: [CommonModule], // Füge CommonModule hinzu
  template: `
      <h1 class="task-manager-title">Task Manager</h1>
      <div class="task-input-container">
        <input #taskInput class="task-input" type="text" placeholder="Enter a task" />
        <button class="task-add-button" (click)="addTask(taskInput.value); taskInput.value = ''">Add Task</button>
      </div>
      <ul class="task-list">
        <li *ngFor="let task of tasks$ | async" class="task-item">
          <span class="task-name">{{ task.name }}</span>
          <button class="task-remove-button" (click)="removeTask(task.id)">Remove</button>
        </li>
      </ul>
  `,
})
export class AppComponent {
  tasks$: Observable<{ id: number; name: string }[]>;

  constructor(private taskService: TaskService, private store: Store<AppState>) {
    this.tasks$ = this.store.select(state => state.tasks.tasks);
    this.taskService.initializeTasks();
  }

  addTask(task: string) {
    this.store.dispatch(addTask({ task }));
  }

  removeTask(id: number) {
    this.store.dispatch(removeTask({ id }));
  }
}
