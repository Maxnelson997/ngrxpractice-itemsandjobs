import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Job} from '../common/models/job.model';

@Component({
    selector: 'jobs-list',
    template: `
    <div *ngFor="let job of jobs" (click)="selected.emit(job)"
    class="fem-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{job.name}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{job.salary}}
    </div>
    <div class="mdl-card__menu">
      <button (click)="deleted.emit(job); $event.stopPropagation();"
        class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">close</i>
      </button>
    </div>
    </div>
    `
})

export class JobsList {
    @Input() jobs: Job[];
    @Output() selected = new EventEmitter();
    @Output() deleted = new EventEmitter();
}