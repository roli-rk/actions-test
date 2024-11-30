import { tasksReducer, initialState } from './tasks.reducer';

describe('Tasks Reducer', () => {
  it('should return the previous state for an unknown action', () => {
    const action = {} as any;
    const result = tasksReducer(initialState, action);
    expect(result).toBe(initialState);
  });
});