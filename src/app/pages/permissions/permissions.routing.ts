import { Routes, RouterModule }  from '@angular/router';

import { Permissions } from './permissions.component';
import {UserInput} from "./components/user-input/user-input.component";
import {UserList} from "./components/user-list/user-list.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Permissions,
    children: [
      { path: 'user-input', component: UserInput },
      { path: 'user-list', component: UserList }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
