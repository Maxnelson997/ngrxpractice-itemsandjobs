import {Item} from './item.model';
import {Widget} from './widget.model';
import {Job} from './job.model';

export interface Gadget {
  items: Item[];
  jobs: Job[];
  widgets: Widget[];
};
