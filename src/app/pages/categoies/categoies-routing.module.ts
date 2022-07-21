import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotegoryFormComponent } from './cotegory-form/cotegory-form.component';
import { CotegoryListComponent } from './cotegory-list/cotegory-list.component';

const routes: Routes = [
  {path: '', component:  CotegoryListComponent},
  {path: 'new', component: CotegoryFormComponent},
  {path: ':id/edit', component: CotegoryFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoiesRoutingModule { }
