import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from '@ngrx/store';
import {JobsService} from '../common/services/jobs.service.ts';
import {AppStore} from '../common/models/appstore.model';
import {Job} from '../common/models/job.model';
import {JobsList} from './jobs-list.component';
import {JobDetail} from './job-detail.component';

import {Gadget} from '../common/models/gadget.model';
import {GadgetService} from '../common/services/gadget.service.ts'

@Component({
  selector: 'jobs',
  template: `
  <div class="mdl-grid jobs">
    <div class="mdl-cell mdl-cell--6-col">
      <jobs-list [jobs]="jobs | async"
        (selected)="selectJob($event)" (deleted)="deleteJob($event)">
      </jobs-list>
    </div>
    <div class="mdl-cell mdl-cell--6-col">
      <job-detail
        (saved)="saveJob($event)" (cancelled)="resetJob($event)"
        [job]="selectedJob | async">Select a Job</job-detail>
    </div>
  </div>
  `,
  styles: [`
    .jobs {
      padding: 20px;
    }
  `],
  providers: [JobsService],
  directives: [JobsList, JobDetail]
})
export class Jobs {
  jobs: Observable<Array<Job>>;
  selectedJob: Observable<Job>;
  gadget: Observable<Gadget>;

  constructor(private jobsService: JobsService,
              private gadgetService: GadgetService,
              private store: Store<AppStore>) {
    this.jobs = jobsService.jobs;
    this.selectedJob = store.select(state => state.selectedJob);
    this.selectedJob.subscribe(v => console.log(v));

    this.gadget = gadgetService.gadget;

    jobsService.loadJobs();
  }

  resetJob() {
    let emptyJob: Job = {id: null, name: '', salary: ''};
    this.store.dispatch({type: 'SELECT_JOB', payload: emptyJob});
  }

  selectJob(job: Job) {
    this.store.dispatch({type: 'SELECT_JOB', payload: job});
  }

  saveJob(job: Job) {
    //   alert('job alert!')
    this.jobsService.saveJob(job);

    // Generally, we would want to wait for the result of `jobsService.saveJob`
    // before resetting the current job.
    this.resetJob();
  }

  deleteJob(job: Job) {
    this.jobsService.deleteJob(job);

    // Generally, we would want to wait for the result of `jobsService.deleteJob`
    // before resetting the current job.
    this.resetJob();
  }
}
