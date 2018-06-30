import { Component, OnInit } from '@angular/core';
import { JobService } from '../core/job.service';
import {Jobresult} from '../models/jobresult';



@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.component.html',
  styleUrls: ['./applyjob.component.css']
})
export class ApplyjobComponent implements OnInit {
mode = '';
filterDisplay = true;
jobresults:Array<Jobresult> = [];

  constructor(private jobservice: JobService) {
  	this.filterDisplay = true; 
  	}

  ngOnInit() {
  		this.mode = 'indeterminate';
  		this.jobresults = [
			    {
			      companyname: 'Vertical Management Consultancy',
			      role : 'Core Java Developer',
			      domain : 'BFS',
			      maxsalary : '1',
			      location : 'Chenni'
			    },
			    {
			      companyname: 'Vertical Management Consultancy',
			      role : 'Core Java Developer',
			      domain : 'BFS',
			      maxsalary : '1',
			      location : 'Chenni'
			    }
			  ];
			  
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
