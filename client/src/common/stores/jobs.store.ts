
export const jobs = (state: any = [], {type, payload}) => {
    switch (type) {
        case 'ADD_JOBS':
            return payload
        case 'CREATE_JOB':
            return [...state, payload];
        case 'UPDATE_JOB':
            return state.map(job => {
                return job.id === payload.id ? Object.assign({}, job, payload) : job;
            });
        case 'DELETE_JOB':
            return state.filter(job => {
                return payload.id !== job.id;
            })
        default: 
            return state;
    }
};