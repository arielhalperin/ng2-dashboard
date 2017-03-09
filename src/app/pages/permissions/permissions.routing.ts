import { Routes, RouterModule }  from '@angular/router';

import { Permissions } from './permissions.component';
import { Users } from './components/users/users.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Permissions,
    children: [
      { path: 'users', component: Users }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
