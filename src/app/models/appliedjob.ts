import { Jobresult } from "./jobresult";

export class AppliedJob {
  _id: string;
  emailaddress: string;
  appliedon: Date;
  jobid: string;
  status: string;
  jobinfo: Jobresult[] = [];

  constructor(emailaddress:string, appliedon:Date, jobid: string, status: string ) {
    this.emailaddress = emailaddress;
    this.appliedon = appliedon;
    this.jobid = jobid;
    this.status = status;
  }
}
