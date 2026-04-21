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
  styleUrl: 'app.component.scss',
  templateUrl: 'app.component.html',
  imports: [CommonModule],
})
export class AppComponent {
  tasks$: Observable<{ id: number; name: string }[]>;

  constructor(private taskService: TaskService, private store: Store<AppState>) {
    this.tasks$ = this.store.select(state => state.tasks.tasks);
    this.taskService.initializeTasks();
  }

  range(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i);
}

onRemove(i: number) {
  console.log(`Remove item with index: ${i}`);
}

  addTask(task: string) {
    this.store.dispatch(addTask({ task }));
  }

  removeTask(id: number) {
    this.store.dispatch(removeTask({ id }));
  }
}
