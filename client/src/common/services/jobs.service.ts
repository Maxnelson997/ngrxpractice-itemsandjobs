import {Http, Headers} from '@angular/http';
import {Injectable, Inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {AppStore} from '../models/appstore.model';
import {Job} from '../models/job.model';
import { Json } from '@angular/core/src/facade/lang';

const BASE_URL = 'http://localhost:3000/jobs/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };


@Injectable()
export class JobsService {
    jobs: Observable<Array<Job>>;

    constructor(private http: Http, private store: Store<AppStore>) {
        this.jobs = store.select(state => state.jobs)
    }

    loadJobs() {
        this.http.get(BASE_URL)
            .map(res => res.json())
            .map(payload => ({ type: 'ADD_JOBS', payload}))
            .subscribe(action => this.store.dispatch(action));
    }

    saveJob(job: Job) {
        // alert('YA BISH');
        (job.id) ? this.updateJob(job) : this.createJob(job);
    }

    createJob(job: Job) {
        this.http.post(`${BASE_URL}`, JSON.stringify(job), HEADER)
            .map(res => res.json())
            .map(payload => ({ type: 'CREATE_JOB', payload}))
            .subscribe(action => this.store.dispatch(action));
    }

    updateJob(job: Job) {
        this.http.put(`${BASE_URL}${job.id}`, JSON.stringify(job), HEADER)
        .subscribe(action => this.store.dispatch({ type: 'UPDATE_JOB', payload: job}));
    }

    deleteJob(job: Job) {
        this.http.delete(`${BASE_URL}${job.id}`)
            .subscribe(action => this.store.dispatch({ type: 'DELETE_JOB', payload: job}));
    }
}

