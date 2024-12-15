import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

// Importiere deine Reducer und Effects
import { TasksEffects } from './app/state/tasks.effects';
import { tasksReducer } from './app/state/tasks.reducer';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore({ tasks: tasksReducer }),
    provideEffects([TasksEffects]),
    provideStoreDevtools()
  ],
});
