import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatChipInputEvent,MatAutocompleteSelectedEvent} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';

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
allFruits:string[] = [];
filteredTechOptions: Observable<string[]>;
locationControl: FormControl;
locationGroups: any;
visible: boolean = true;
selectable: boolean = true;
removable: boolean = true;
addOnBlur: boolean = false;
separatorKeysCodes = [ENTER, COMMA];
fruitCtrl: FormControl;
filteredFruits: Observable<any[]>;
fruits = [];

@ViewChild('fruitInput') fruitInput: ElementRef;


constructor(private _formBuilder: FormBuilder, public dialog: MatDialog,
  private utilitiesService: UtilitiesService, private profileService: ProfileService) {
  this.userprofile = new Userprofile();
  this.techControl = new FormControl();
  this.locationControl = new FormControl();
  this.fruitCtrl = new FormControl();
  this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
  startWith(null),
  map((fruit: string | null) => fruit ? this.filter(fruit) : this.allFruits.slice()));
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

  this.firstFormGroup = this._formBuilder.group({ firstCtrl: ['', Validators.required]});
  this.secondFormGroup = this._formBuilder.group({ secondCtrl: ['', Validators.required]});
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
}

