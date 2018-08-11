import { Component, OnInit } from '@angular/core';
import { JobService } from '../core/job.service';
import {Jobresult} from '../models/jobresult';
import { AppliedJob } from '../models/appliedjob';
import { Router } from '@angular/router';
import { ProfileService } from '../core/profile.service';



@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.component.html',
  styleUrls: ['./applyjob.component.css']
})
export class ApplyjobComponent implements OnInit {
mode = '';
filterDisplay = true;
searchitem: any[];
jobresults:Array<Jobresult> = [];
appliedjob:Array<AppliedJob> = [];
statusrefercepending: boolean = false;
statusreferencecompleted: boolean = false;

appliedjobs:string;


  constructor(private jobservice: JobService, private profileService: ProfileService, private router: Router) {
  	this.filterDisplay = true;
  	}

  ngOnInit() {
      this.mode = 'indeterminate';
     this.profileService.getereferencestatusbyemail(localStorage.getItem('email')).then( res => {
        if (res["status"] === "Reference Verification Pending") {
            this.statusrefercepending = true;
        } else if (res["status"] === "Reference Verification Completed") {
          this.statusreferencecompleted = true;
        }
      });
      this.jobservice.getappliedjobbyemail(localStorage.getItem('email')).subscribe( res => {
            this.appliedjob = res;
      });


	this.mode = '';
  }


  datediff(date1): Number {
    var dateOut1 = new Date(date1);
    var dateOut2 = new Date(Date.now());
   	var timeDiff = Math.abs(dateOut2.getTime() - dateOut1.getTime());
   	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
   	return diffDays;
  }

  deleteJob(jobId) {
    this.jobservice.deletejobbyjobid(jobId).then(jobinfo => {

    var filterarr = this.appliedjob.filter(e => e._id === jobId);
    const index = this.appliedjob.indexOf(filterarr[0]);
    console.log(index);
    if (index >= 0) {
      this.appliedjob.splice(index, 1);
    }
    });
  }
}
