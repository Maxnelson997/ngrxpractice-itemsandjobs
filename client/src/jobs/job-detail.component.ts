import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Job} from '../common/models/job.model';

@Component({
  selector: 'job-detail',
  template: `
  <div class="fem-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text" *ngIf="selectedJob.id">Editing {{originalName}}</h2>
      <h2 class="mdl-card__title-text" *ngIf="!selectedJob.id">Create New Job</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <form novalidate>
          <div class="mdl-textfield mdl-js-textfield">
            <label>Job Name</label>
            <input [(ngModel)]="selectedJob.name"
              name="name"
              placeholder="Enter a name"
              class="mdl-textfield__input" type="text">
          </div>

        <div class="mdl-textfield mdl-js-textfield">
          <label>Job Salary</label>
          <input [(ngModel)]="selectedJob.salary"
            name="salary"
            placeholder="Enter a salary"
            class="mdl-textfield__input" type="text">
        </div>

      </form>
    </div>
    <div class="mdl-card__actions">
        <button type="submit" (click)="cancelled.emit(selectedJob)"
          class="mdl-button mdl-js-button mdl-js-ripple-effect">Cancel</button>
        <button type="submit" (click)="saved.emit(selectedJob)"
          class="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect">Save</button>
    </div>
  </div>
  `
})
export class JobDetail {
  originalName: string;
  selectedJob: Job;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set job(value: Job){
    if (value) this.originalName = value.name;
    this.selectedJob = Object.assign({}, value);
  }
}
