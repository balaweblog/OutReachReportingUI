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
techoptions:any;
filteredTechOptions: Observable<string[]>;
locationControl: FormControl;
step = 0;
locationGroups:any;

constructor(public dialog: MatDialog, private detailsService:DetailsService ) {
}

ngOnInit() {
  this.techControl = new FormControl();
  this.techoptions = this.detailsService.getSkillSet();
  this.locationControl = new FormControl();
  this.locationGroups =  this.detailsService.getLocationDeatils();
  this.filteredTechOptions = this.techControl.valueChanges.pipe(startWith(''), map(val => this.filter(val)));

}

filter(val: string): string[] {
   this.skillfamily = "";

   if (this.detailsService.isValidSkillSet(val)) {
    let dialogRef = this.dialog.open(SkillfamilyComponent, {width: '250px', data: { skillfamily: this.skillfamily}
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
