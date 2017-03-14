import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './permissions.routing';
import { Permissions } from './permissions.component';
import {RegisterModule} from "../register/register.module";
import {UserInput} from "./components/user-input/user-input.component";
import {UserList} from "./components/user-list/user-list.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    RegisterModule,
    routing
  ],
  declarations: [
    Permissions,
    UserInput,
    UserList
  ]
})
export class PermissionsModule {
}
