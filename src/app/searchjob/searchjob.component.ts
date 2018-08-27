import {map} from 'rxjs/operators/map';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { startWith} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatSnackBar} from '@angular/material';
import {Usersearch} from '../models/usersearch';
import {Jobresult} from '../models/jobresult';
import { UtilitiesService } from '../core/utilities.service';
import { JobService } from '../core/job.service';
import { AppliedJob } from '../models/appliedjob';
import { ProfileService } from '../core/profile.service';

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
skillfamilycluster:string[] = [];
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
skillfamilyCtrl: FormControl;
filteredskillfamily: Observable<any[]>;
skillfamiliyclustergroup = [];
appliedjob: AppliedJob;
useremail: string;
skillsetfromprofile: string;
@ViewChild('skillInput') skillInput: ElementRef;
validationError = '';
Isprofileset: boolean;

constructor(public dialog: MatDialog, private utilitiesService:UtilitiesService, private jobservice: JobService
    , private profileService: ProfileService, private snackBar: MatSnackBar) {
this.usersearch  = new Usersearch();
this.locationControl = new FormControl();
this.skillfamilyCtrl = new FormControl();

this.filteredskillfamily = this.skillfamilyCtrl.valueChanges.pipe(
  startWith(null),
  map((skill: string | null) => skill ? this.filter(skill) : this.skillfamilycluster.slice()));
}

ngOnInit() {
  this.usersearch.experience = "3";
  this.usersearch.salaryExpectation = "3";
  this.usersearch.salaryExpectationTo = "12";
  this.techControl = new FormControl();
  this.locationControl = new FormControl();
  this.useremail = localStorage.getItem('email');

  this.profileService.hasuserprofile(this.useremail).then((result) => {
    this.Isprofileset = !result;
  });

  // populate skillset
  this.utilitiesService.getskillset().subscribe(
    data => {
         for (let key in data) {
           if (!this.skillfamilycluster.some(x => x === data[key].primary)) {
                  this.skillfamilycluster.push(data[key].primary);
           }
         }
      }
   );

   // populate job locations
  this.utilitiesService.getjoblocations().subscribe(res => this.locationGroups = res);

  // filter tech options
  this.filteredTechOptions = this.techControl.valueChanges.pipe(startWith(''), map(val => this.filter(val)));

  //load your data.
  this.profileService.hasuserprofile(this.useremail).then(
    res => {
        if (res) {
          this.profileService.getprofile(this.useremail).then(
            res1  => {
              this.usersearch.experience = res1.experience.toString();
              this.usersearch.salaryExpectation = res1.salaryexpectationmin.toString();
              this.usersearch.salaryExpectationTo = res1.salaryexpectationmax.toString();
              this.usersearch.location = res1.location.split(',');
              for (let i = 0; i < res1.skillset.toString().split(',').length; i++) {
                this.skillfamiliyclustergroup.push(res1.skillset.toString().split(',')[i]);
              }
          }
      );
    }
  });
}

searchJob() {
  this.usersearch.skillSet = this.skillfamiliyclustergroup;
  this.validationError = this.jobservice.validate(this.usersearch);
  if (this.validationError === '') {
	  this.mode = 'indeterminate';
	  this.step = 1;
	  this.filterDisplay = false;
	  this.jobservice.getjobs(this.usersearch.skillSet, this.useremail, this.usersearch.experience, this.usersearch.salaryExpectation
	  , this.usersearch.salaryExpectationTo, this.usersearch.location).subscribe(res => this.jobresults = res);
	    this.mode = 'determinate';
  } else {
    this.openErrorBar(this.validationError);
 }
}

applyJob(jobId) {
  this.appliedjob = new AppliedJob(localStorage.getItem('email'), new Date(), jobId, "Submitted");
  this.jobservice.applyjob(this.appliedjob).then(userprof => {
      var filterarr = this.jobresults.filter(e => e._id === jobId);
      const index = this.jobresults.indexOf(filterarr[0]);
      if (index >= 0) {
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

    if ((value || '').trim()) {
      this.skillfamiliyclustergroup.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
    this.skillfamilyCtrl.setValue(null);
  }

  remove(skill: any): void {
    const index = this.skillfamiliyclustergroup.indexOf(skill);

    if (index >= 0) {
      this.skillfamiliyclustergroup.splice(index, 1);
    }
  }

  filter(name: string) {
    return this.skillfamilycluster.filter(skill => skill.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.skillfamiliyclustergroup.push(event.option.viewValue);
    this.skillInput.nativeElement.value = '';
    this.skillfamilyCtrl.setValue(null);
  }
  datediff(date1): Number {
    var dateOut1 = new Date(date1);
    var dateOut2 = new Date(Date.now());
   var timeDiff = Math.abs(dateOut2.getTime() - dateOut1.getTime());
   var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
   return diffDays;
  }

 openErrorBar(message: string) {
    this.snackBar.open(message, '', { duration: 5000});
  }
}
