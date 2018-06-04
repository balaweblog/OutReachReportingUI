import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {map, startWith} from 'rxjs/operators';

@Injectable()
export class DetailsService {

  constructor() { }


  getSkillSet() {
 	return ['Java', '.Net', 'JavaScript','C#','Python','PHP','Swift'];
  }
  
  getSkillFamily(skillSet){
   
    return ['Jenkins', 'Docker', 'AWS', 'Spring Cloud', 'github', 'Spring Integration'];
  }
  
  getJobList(userId,skillSet,skillFamily){
   
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
  
  
  
  isValidSkillSet(skillSet){
  console.log(skillSet)
   if(skillSet == 'Java'){
    	return true;
    }else{
    	return false;
    }
  }
 
 
  getLocationDeatils() {
   return [
    {
      name: 'Tamil Nadu',
      location: [
        { value: 'Chennai', viewValue: 'Chennai' },
        { value: 'Coimbatore', viewValue: 'Coimbatore' },
        { value: 'Madurai', viewValue: 'Madurai' }
      ]
    },
    {
      name: 'Karnataka',
      location: [
        { value: 'Bengaluru', viewValue: 'Bengaluru' },
        { value: 'Mysore', viewValue: 'Mysore' },
        { value: 'Mangalore', viewValue: 'Mangalore' }
      ]
    }
  ];
  }
  
  isUserRegistered(email){
   return true;
  }
}
