import { NgModule } from '@angular/core';
import { ApplyjobComponent } from './applyjob.component';
import { Routes, RouterModule } from '@angular/router';
import { MasterlayoutComponent } from '../layout/masterlayout/masterlayout.component';

const routes: Routes = [
  {
    path: '',
    component: MasterlayoutComponent,
    children: [
      { path: 'applyjob', component: ApplyjobComponent },
    ]
},
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
export class ApplyjobRoutingModule { }
