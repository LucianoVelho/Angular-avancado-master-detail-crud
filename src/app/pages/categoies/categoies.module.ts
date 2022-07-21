import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoiesRoutingModule } from './categoies-routing.module';
import { CotegoryListComponent } from './cotegory-list/cotegory-list.component';
import { CotegoryFormComponent } from './cotegory-form/cotegory-form.component';


@NgModule({
  declarations: [
    CotegoryListComponent,
    CotegoryFormComponent
  ],
  imports: [
    CommonModule,
    CategoiesRoutingModule
  ]
})
export class CategoiesModule { }
