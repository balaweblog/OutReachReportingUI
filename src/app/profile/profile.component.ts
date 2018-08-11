import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent, MatAutocompleteSelectedEvent, MatSnackBar} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';

import { Userprofile } from '../models/userprofile';
import { UtilitiesService } from '../core/utilities.service';
import { ProfileService } from '../core/profile.service';
import { ActivatedRoute, Router } from '@angular/router';

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
allFruits:string[] = [];
filteredTechOptions: Observable<string[]>;
locationControl: FormControl;
locationGroups: any[];
locationInfo = [];
visible: boolean = true;
selectable: boolean = true;
removable: boolean = true;
addOnBlur: boolean = false;
separatorKeysCodes = [ENTER, COMMA];
fruitCtrl: FormControl;
filteredFruits: Observable<any[]>;
fruits = [];
useremail: string;
userphoto: string;

validationError = '';



@ViewChild('fruitInput') fruitInput: ElementRef;


 constructor(private _formBuilder: FormBuilder, public dialog: MatDialog,
  private utilitiesService: UtilitiesService, private profileService: ProfileService
, private router: Router, private snackBar: MatSnackBar) {
  this.techControl = new FormControl();
  this.locationControl = new FormControl();
  this.fruitCtrl = new FormControl();
  this.userprofile  = new Userprofile();

  this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
  startWith(null),
  map((fruit: string | null) => fruit ? this.filter(fruit) : this.allFruits.slice()));
}
 ngOnInit() {
  this.useremail = localStorage.getItem('email');
  this.userphoto = localStorage.getItem('photo');

 // populate skillset
 this.utilitiesService.getskillset().subscribe(
  data => {
       for (let key in data) {
         if (!this.allFruits.some(x => x === data[key].primary)) {
                this.allFruits.push(data[key].primary);
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
            res1  => {
              this.userprofile = res1;

              for (let i = 0; i < this.userprofile.skillset.toString().split(',').length; i++) {
                this.fruits.push(this.userprofile.skillset.toString().split(',')[i]);
              }
              for ( let i = 0; i < this.userprofile.location.split(',').length; i++ ) {
                  this.locationInfo.push(this.userprofile.location.split(',')[i]);
              }
            }
          );
        } else {
          this.userprofile.emailaddress = this.useremail;
        }
    }
  );


}

submitprofile() {
  this.userprofile.skillset = this.fruits;
  this.userprofile.location = this.locationInfo.toString();
  this.userprofile.status = "Active";


	this.userprofile.skillset = this.fruits;
  	this.userprofile.location = this.locationInfo.toString();
     this.validationError = this.profileService.validate(this.userprofile);

	  if (this.validationError === '') {
      this.profileService.getreferencestatus(this.userprofile.emailaddress, this.userprofile.referencename
        , this.userprofile.referencenumber).then(
          res1  => {
            console.log(res1);
            if (res1 === undefined || res1 === null) {
                this.userprofile.referencestatus = "Reference Verification Pending";
            } else  {
              if (res1["referencestatus"] !== "Reference Verification Completed") {
              this.userprofile.referencestatus = "Reference Verification Pending";
              }
            }
            this.profileService.addprofile(this.userprofile).then(userprof => {
              this.router.navigate(['/searchjob']);
            });
          }
        );

	  } else {
      this.openErrorBar(this.validationError);
    }
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

    add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.fruitCtrl.setValue(null);
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  filter(name: string) {
    return this.allFruits.filter(fruit =>
        fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }
  datediff(date1): Number {
    var dateOut1 = new Date(date1);
    var dateOut2 = new Date(Date.now());
   var timeDiff = Math.abs(dateOut2.getTime() - dateOut1.getTime());
   var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
   return diffDays;
  }

  openErrorBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000,
    });
  }
}
