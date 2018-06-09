import { NgModule } from '@angular/core';
import { SearchjobComponent } from './searchjob.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'searchjob',  component: SearchjobComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class SearchjobRoutingModule { }
