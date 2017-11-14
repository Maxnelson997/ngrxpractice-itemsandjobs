import { Items } from './src/items/items.component';
import { Jobs } from './src/jobs/jobs.component';
import { Widgets } from './src/widgets/widgets.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '',            component: Items },
  {path: 'items',      component: Items},
  {path: 'jobs',      component: Jobs},
  {path: 'widgets',    component: Widgets},
  {path: '*',           component: Items }
];
