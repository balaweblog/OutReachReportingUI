import {map} from 'rxjs/operators/map';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import { startWith} from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {SkillfamilyComponent} from '../shared/skillfamily/skillfamily.component';
import {Usersearch} from '../models/usersearch';
import {Jobresult} from '../models/jobresult';
import { UtilitiesService } from '../core/utilities.service';
import { Skillset } from '../models/skillset';
import 'rxjs/Rx';
import { JobService } from '../core/job.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';

@Component({
  selector: 'app-searchjob',
  templateUrl: './searchjob.component.html',
  styleUrls: ['./searchjob.component.css']
})

export class SearchjobComponent implements OnInit {
usersearch:Usersearch = new Usersearch();
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

  fruitCtrl = new FormControl();

  filteredFruits: Observable<any[]>;

  fruits = [];

  //allFruits = this.detailsService.getSkillSet();

  @ViewChild('fruitInput') fruitInput: ElementRef;


constructor(public dialog: MatDialog, private utilitiesService:UtilitiesService,
private jobservice: JobService) {

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

/*filter(val: string): string[] {
  this.skillfamily = "";

   if (this.detailsService.isValidSkillSet(val)) {
   this.mode = 'indeterminate';
    let dialogRef = this.dialog.open(SkillfamilyComponent, {width: '250px', data: { skillfamily: this.skillfamily}
    });

    dialogRef.afterClosed().subscribe(result => { console.log('The dialog was closed'); this.skillfamily = result; this.mode = '';});


  }
  return this.techoptions.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }*/

  searchJob() {
      //if (this.usersearch.skillSet === '') {
      //    this.errMessage = "Skill Set are Required";
      //} else {
      		this.mode = 'indeterminate';
      		this.step = 1;
      		this.filterDisplay = false;
			//this.jobservice.getjobs(this.usersearch.skillSet).subscribe(res => this.jobresults = res);

			this.jobresults = [
			    {
			      companyname: 'Vertical Management Consultancy',
			      role : 'Core Java Developer',
			      domain : 'BFS',
			      maxsalary : '1lakhs',
			      location : 'Chenni',
			      jobid: '1'
			    },
			    {
			      companyname: 'ThinkApps Solutions Private Limited',
			       role : 'Core Java Developer',
			      domain : 'BFS',
			      maxsalary : '1lakhs',
			      location : 'Chenni',
			      jobid: '1'
			    },
			    {
			      companyname: 'Sibez Technologies',
			      role : 'Core Java Developer',
			      domain : 'BFS',
			      maxsalary : '1lakhs',
			      location : 'Chenni',
			      jobid: '1'
			    },
			    {
			      companyname: 'Ecentric Solutions Pvt. Ltd.',
			       role : 'Core Java Developer',
			      domain : 'BFS',
			      maxsalary : '1lakhs',
			      location : 'Chenni',
			      jobid: '1'
			    },
			    {
			      companyname: 'ThinkApps Solutions Private Limited',
			       role : 'Core Java Developer',
			      domain : 'BFS',
			      maxsalary : '1lakhs',
			      location : 'Chenni',
			      jobid: '1'
			    },
			    {
			      companyname: 'Sibez Technologies',
			       role : 'Core Java Developer',
			      domain : 'BFS',
			      maxsalary : '1lakhs',
			      location : 'Chenni',
			      jobid: '1'
			    },
			    {
			      companyname: 'Ecentric Solutions Pvt. Ltd.',
			      role : 'Core Java Developer',
			      domain : 'BFS',
			      maxsalary : '1lakhs',
			      location : 'Chenni',
			      jobid: '1'
			    },
			    {
			      companyname: 'ThinkApps Solutions Private Limite',
			       role : 'Core Java Developer',
			      domain : 'BFS',
			      maxsalary : '1lakhs',
			      location : 'Chenni',
			      jobid: '1'
			    },
			    {
			      companyname: 'Sibez Technologies',
			       role : 'Core Java Developer',
			      domain : 'BFS',
			      maxsalary : '1lakhs',
			      location : 'Chenni',
			      jobid: '1'
			    },
			    {
			      companyname: 'Ecentric Solutions Pvt. Lt',
			       role : 'Core Java Developer',
			      domain : 'BFS',
			      maxsalary : '1lakhs',
			      location : 'Chenni',
			      jobid: '1'
			    }
			  ];
			console.log(this.jobresults);
			this.usersearch = new Usersearch();
        	this.errMessage = "";

        	this.mode = '';
      //}
  }

  applyJob(jobId) {
  	console.log(jobId);
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
}
