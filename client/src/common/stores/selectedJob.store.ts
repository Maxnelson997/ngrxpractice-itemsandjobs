export const selectedJob = (state: any = null, {type, payload}) => {
    switch (type) {
        case 'SELECT_JOB': 
            return payload;
        default:
            return state;
    }
}