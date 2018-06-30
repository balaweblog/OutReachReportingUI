import { NgModule } from '@angular/core';
import { ApplyjobComponent } from './applyjob.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'applyjob',  component: ApplyjobComponent }
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
