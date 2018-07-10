import {map} from 'rxjs/operators/map';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import { startWith} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import 'rxjs/Rx';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';

import {Usersearch} from '../models/usersearch';
import {Jobresult} from '../models/jobresult';
import { UtilitiesService } from '../core/utilities.service';
import { JobService } from '../core/job.service';
import { AppliedJob } from '../models/appliedjob';


@Component({
  selector: 'app-searchjob',
  templateUrl: './searchjob.component.html',
  styleUrls: ['./searchjob.component.css']
})

export class SearchjobComponent implements OnInit {
usersearch:Usersearch;
jobresults:Array<Jobresult> = [];
errMessage = '';
userId = '1';
skillfamily: string;
skillset: string;
techControl:FormControl;
techoptions:string[] = [];
allFruits:string[] = [];
filteredTechOptions: Observable<string[]>;
locationControl: FormControl;
step = 0;
locationGroups:any;
mode = '';
filterDisplay = true;
visible: boolean = true;
selectable: boolean = true;
removable: boolean = true;
addOnBlur: boolean = false;
separatorKeysCodes = [ENTER, COMMA];
fruitCtrl: FormControl;
filteredFruits: Observable<any[]>;
fruits = [];
appliedjob: AppliedJob;

@ViewChild('fruitInput') fruitInput: ElementRef;


constructor(public dialog: MatDialog, private utilitiesService:UtilitiesService, private jobservice: JobService) {
this.usersearch  = new Usersearch();
this.locationControl = new FormControl();
this.fruitCtrl = new FormControl();

this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
  startWith(null),
  map((fruit: string | null) => fruit ? this.filter(fruit) : this.allFruits.slice()));
}

ngOnInit() {
  this.techControl = new FormControl();
  this.locationControl = new FormControl();

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

  // filter tech options
  this.filteredTechOptions = this.techControl.valueChanges.pipe(startWith(''), map(val => this.filter(val)));
}

searchJob() {
 this.mode = 'indeterminate';
 this.step = 1;
 this.filterDisplay = false;
 this.usersearch.skillSet = this.fruits;
 this.jobservice.getjobs(this.usersearch.skillSet).subscribe(res => this.jobresults = res);

}

  applyJob(jobId) {
    console.log(jobId);
    this.appliedjob = new AppliedJob(localStorage.getItem('email'), new Date(), jobId, "Submitted");

    this.jobservice.applyjob(this.appliedjob).then(userprof => {
      var filterarr = this.jobresults.filter(e => e._id === jobId);
      const index = this.jobresults.indexOf(filterarr[0]);
      if (index >= 0) {
        console.log(filterarr);
        console.log(index);
        this.jobresults.splice(index, 1);
      }
    });
  }

  experienceUpdate(event) {
    this.usersearch.experience = event.from;
  }
  salaryExpectationOnUpdate(event) {
    this.usersearch.salaryExpectation = event.from;
    this.usersearch.salaryExpectationTo = event.to;
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
