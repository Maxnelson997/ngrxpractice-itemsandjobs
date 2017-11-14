import {jobs} from './jobs.store';

describe('`jobs` store', () => {
  let initialState = [
    { id: 0, name: 'First Job' },
    { id: 1, name: 'Second Job' }
  ];

  it('returns an empty array by default', () => {
    let defaultState = jobs(undefined, {type: 'random', payload: {}});

    expect(defaultState).toEqual([]);
  });

  it('`ADD_JOBS`', () => {
    let payload = initialState,
      stateJobs = jobs([], {type: 'ADD_JOBS', payload: payload});

    expect(stateJobs).toEqual(payload);
  });

  it('`CREATE_JOB`', () => {
    let payload = {id: 2, name: 'added job'},
      result = [...initialState, payload],
      stateJobs = jobs(initialState, {type: 'CREATE_JOB', payload: payload});

    expect(stateJobs).toEqual(result);
  });

  it('`UPDATE_JOB`', () => {
    let payload = { id: 1, name: 'Updated JOB' },
      result = [ initialState[0], { id: 1, name: 'Updated JOB' } ],
      stateJobs = jobs(initialState, {type: 'UPDATE_JOB', payload: payload});

    expect(stateJobs).toEqual(result);
  });

  it('`DELETE_JOB`', () => {
    let payload = { id: 0 },
      result = [ initialState[1] ],
      stateJobs = jobs(initialState, {type: 'DELETE_JOB', payload: payload});

    expect(stateJobs).toEqual(result);
  });
});
