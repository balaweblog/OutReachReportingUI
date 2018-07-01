import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { MasterlayoutComponent } from '../layout/masterlayout/masterlayout.component';

const routes: Routes = [
  {
    path: '',
    component: MasterlayoutComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
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
export class ProfileRoutingModule { }
