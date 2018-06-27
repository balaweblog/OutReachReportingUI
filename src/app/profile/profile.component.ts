import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import { Userprofile } from '../models/userprofile';
import { UtilitiesService } from '../core/utilities.service';
import { ProfileService } from '../core/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

userprofile: Userprofile = new Userprofile();
skillfamily: string;
firstFormGroup: FormGroup;
secondFormGroup: FormGroup;
techControl: FormControl;
techoptions: string[] = [];
filteredTechOptions: Observable<string[]>;
locationControl: FormControl;
locationGroups: any;
useremail:string;
userphoto: string;
hasprofile: boolean;

 constructor(private _formBuilder: FormBuilder, public dialog: MatDialog,
  private utilitiesService: UtilitiesService, private profileService: ProfileService) {
  this.techControl = new FormControl();
  this.locationControl = new FormControl();
}
 ngOnInit() {
  this.useremail = localStorage.getItem('email');
  this.userphoto = localStorage.getItem('photo');

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

  this.firstFormGroup = this._formBuilder.group({
    fullname: ['', Validators.required],
    contactnumber: ['', Validators.required],
    emailaddress: ['', Validators.required],
  });
  this.secondFormGroup = this._formBuilder.group({
    skillset: ['', Validators.required],
    lastworkingday: ['', Validators.required],
    referencename: ['', Validators.required],
    referencenumber: ['', Validators.required]
  });

  this.profileService.hasuserprofile(this.useremail).then(
    res => {
        if (res) {
          this.profileService.getprofile(this.useremail).then(
            res1  => this.userprofile = res1
          );
        } else {
          this.userprofile.emailaddress = this.useremail;
        }
    }
  );
}

submitprofile() {
  this.profileService.addprofile(this.userprofile).then(userprof => {
  });
}

experienceUpdate(event) {
    this.userprofile.experience = event.from;
 }
 salaryExpectationOnUpdate(event) {
  this.userprofile.salaryexpectationmin = event.from;
  this.userprofile.salaryexpectationmax = event.to;
  }
  noticePeriodUpdate(event) {
  	this.userprofile.noticeperiod = event.from;
  }
}

