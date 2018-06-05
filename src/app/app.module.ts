import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';


import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule,MatNativeDateModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,  ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {NotesService} from './notes.service';
import { ProfileComponent } from './profile/profile.component';
import { RouterService } from './router.service';
import { DetailsService } from './details.service';
import { SearchjobComponent } from './searchjob/searchjob.component';
import { SkillfamilyComponent } from './skillfamily/skillfamily.component';
import { HeaderComponent } from './shared/header/header.component';


const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'searchjob', component: SearchjobComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteComponent,
    ProfileComponent,
    SearchjobComponent,
    SkillfamilyComponent
  ],
  imports: [
  MatSliderModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatMenuModule,
  MatIconModule,
  MatDialogModule,
  MatStepperModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NotesService, RouterService, DetailsService],
  entryComponents: [AppComponent, SkillfamilyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
