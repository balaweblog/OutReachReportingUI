import { Injectable } from '@angular/core';

@Injectable()
export class DetailsService {

  constructor() { }

  getJobList(userId, skillSet, skillFamily) {

    return [
			    {
			      companyName: 'Vertical Management Consultancy',
			      role : 'Core Java Developer',
			      domain : 'BFS',
			      maxSalary : '10 lakhs',
			      location : 'Chennai',
			      jobId: '1'
			    },
			    {
			      companyName: 'ThinkApps Solutions Private Limited',
			      role : 'Program Manager - Core Java',
			      domain : 'BFS',
			      maxSalary : '12 lakhs',
			      location : 'Mumbai, Mumbai City',
			      jobId: '2'
			    },
			    {
			      companyName: 'Sibez Technologies',
			      role : 'Core Java',
			      domain : 'BFS',
			      maxSalary : '10 lakhs',
			      location : 'Bengaluru / Bangalore',
			      jobId: '3'
			    },
			    {
			      companyName: 'Ecentric Solutions Pvt. Ltd.',
			      role : 'Associate Consultant - Core JAVA',
			      domain : 'BFS',
			      maxSalary : '8 lakhs',
			      location : 'Pune',
			      jobId: '4'
			    }
			  ];
  }

  isUserRegistered(email) {
   return true;
  }
}
