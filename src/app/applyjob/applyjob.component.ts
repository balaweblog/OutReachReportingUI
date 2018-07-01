import { Component, OnInit } from '@angular/core';
import { JobService } from '../core/job.service';
import {Jobresult} from '../models/jobresult';
import { AppliedJob } from '../models/appliedjob';



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
appliedjobs:string;


  constructor(private jobservice: JobService) {
  	this.filterDisplay = true;
  	}

  ngOnInit() {
      this.mode = 'indeterminate';
      console.log(localStorage.getItem('email'));
      this.jobservice.getappliedjobbyemail(localStorage.getItem('email')).subscribe(
         (data) => {
          this.appliedjobs = data.map(function(a) {return a["jobid"]; }).join();
          this.jobservice.getappliedjobbyjobid(this.appliedjobs).subscribe(
            res => this.jobresults = res);
            }
          );

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
  	console.log(jobId);
  }

}
