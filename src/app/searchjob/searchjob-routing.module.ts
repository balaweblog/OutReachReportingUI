import { NgModule } from '@angular/core';
import { SearchjobComponent } from './searchjob.component';
import { Routes, RouterModule } from '@angular/router';
import { MasterlayoutComponent } from '../layout/masterlayout/masterlayout.component';

const routes: Routes = [
  {
    path: '',
    component: MasterlayoutComponent,
    children: [
      { path: 'searchjob', component: SearchjobComponent },
    ]
}
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
