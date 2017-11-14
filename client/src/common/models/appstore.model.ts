import {Item} from './item.model';
import {Job} from './job.model';
import {Widget} from "./widget.model";

export interface AppStore {
  jobs: Job[];
  selectedJob: Job;

  items: Item[];
  selectedItem: Item;

  widgets: Widget[];
  selectedWidget: Widget;
};
