import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TaskService } from './tasks/tasks.service';

describe('AppComponent', () => {
  let store: MockStore;
  const initialState = {
    tasks: {
      tasks: [
        { id: 1, name: 'Test Task 1' },
        { id: 2, name: 'Test Task 2' },
      ],
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideMockStore({ initialState }), // Mock-Store bereitstellen
        {
          provide: TaskService,
          useValue: { initializeTasks: jest.fn() }, // Mock-TaskService bereitstellen
        },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Task Manager');
  });
});
