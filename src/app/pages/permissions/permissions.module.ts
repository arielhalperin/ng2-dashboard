import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './permissions.routing';
import { Permissions } from './permissions.component';
import { Users } from './components/users/users.component';
import {RegisterModule} from "../register/register.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    RegisterModule,
    routing
  ],
  declarations: [
    Permissions,
    Users
  ]
})
export class PermissionsModule {
}
