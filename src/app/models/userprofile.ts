export class Userprofile {
  fullname: string;
  contactnumber: string;
  emailaddress: string;
  primaryskillset : string;
  secondaryskillset:string;
  experience: Number;
  salaryexpectation: Number;
  salaryexpectationto: Number;
  lastworkingday: Date;
  location:string[] = [];
  noticeperiod: Number;
  referencename: string;
  referencenumber: string;
  
  constructor() {
  this.experience = 1;
  this.salaryexpectation = 4;
  this.salaryexpectationto = 7;
  }
}
