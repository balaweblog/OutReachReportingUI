import {map} from 'rxjs/operators/map';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import { startWith} from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { DetailsService } from '../core/details.service';
import {SkillfamilyComponent} from '../shared/skillfamily/skillfamily.component';
import {Usersearch} from '../models/usersearch';
import {Jobresult} from '../models/jobresult';
import { UtilitiesService } from '../core/utilities.service';
import { Skillset } from '../models/skillset';
import 'rxjs/Rx';


@Component({
  selector: 'app-searchjob',
  templateUrl: './searchjob.component.html',
  styleUrls: ['./searchjob.component.css']
})

export class SearchjobComponent implements OnInit {
usersearch:Usersearch = new Usersearch();
jobresults:Array<Object> = [];
errMessage = '';
userId = '1';
skillfamily: string;
skillset: string;
techControl:FormControl;
techoptions:string[] = [];
filteredTechOptions: Observable<string[]>;
locationControl: FormControl;
step = 0;
locationGroups:any;

constructor(public dialog: MatDialog, private detailsService:DetailsService, private utilitiesService:UtilitiesService) {
}

ngOnInit() {
  this.techControl = new FormControl();
  this.locationControl = new FormControl();

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
}

filter(val: string): string[] {
  this.skillfamily = "";

  if (this.techoptions.some(x => x === val)) {
        let dialogRef = this.dialog.open(SkillfamilyComponent, {width: '250px', data: { skillfamily: this.skillfamily, primary: val}
    });
    dialogRef.afterClosed().subscribe(result => { console.log('The dialog was closed'); this.skillfamily = result; });
  }
  return this.techoptions.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
}

  searchJob() {
      if (this.usersearch.skillSet === '') {
          this.errMessage = "Skill Set are Required";
      } else {
      		this.step = 1;
      		this.jobresults = this.detailsService.getJobList(this.userId, this.usersearch.skillSet, this.skillfamily);
          this.usersearch = new Usersearch();
        	this.errMessage = "";
      }
  }

  applyJob(jobId) {
  	console.log(jobId);
  }
}
