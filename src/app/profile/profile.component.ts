import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {map, startWith} from 'rxjs/operators';

import { SkillfamilyComponent } from '../shared/skillfamily/skillfamily.component';
import {Userprofile} from '../models/userprofile';
import { UtilitiesService } from '../core/utilities.service';
import { ProfileService } from '../core/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

userprofile: Userprofile;
skillfamily: string;
firstFormGroup: FormGroup;
secondFormGroup: FormGroup;
techControl: FormControl;
techoptions: string[] = [];
filteredTechOptions: Observable<string[]>;
locationControl: FormControl;
locationGroups: any;

constructor(private _formBuilder: FormBuilder, public dialog: MatDialog,
  private utilitiesService: UtilitiesService, private profileService: ProfileService) {
  this.userprofile = new Userprofile();
  this.techControl = new FormControl();
  this.locationControl = new FormControl();
}

ngOnInit() {
   // populate skillset
   this.utilitiesService.getskillset().subscribe(
    data => {
         for (let key in data) {
           if (!this.techoptions.some(x => x === data[key].primary)) {
                  this.techoptions.push(data[key].primary);
           }
         }
      }
   );
  // populate job locations
  this.utilitiesService.getjoblocations().subscribe(res => this.locationGroups = res['joblocations']);

  // filter tech options
  this.filteredTechOptions = this.techControl.valueChanges.pipe(startWith(''), map(val => this.filter(val)));

  this.firstFormGroup = this._formBuilder.group({ firstCtrl: ['', Validators.required]});
  this.secondFormGroup = this._formBuilder.group({ secondCtrl: ['', Validators.required]});
}

filter(val: string): string[] {
   this.userprofile.secondaryskillset = '';

  if (this.techoptions.some(x => x === val)) {
    const dialogRef = this.dialog.open(SkillfamilyComponent, { width: '250px',
    data: {skillset: this.userprofile.secondaryskillset, primary: val}}); dialogRef.afterClosed().
    subscribe(result => { this.userprofile.secondaryskillset = result; });
   }
  return this.techoptions.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
 }

submitprofile() {
  this.profileService.addprofile(this.userprofile).then(userprof => {
  });
}
}

