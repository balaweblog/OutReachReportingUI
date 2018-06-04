import {Component, OnInit} from '@angular/core';
import {NotesService} from '../notes.service';
import {FormControl} from '@angular/forms';
import {Usersearch} from '../usersearch';
import {Jobresult} from '../jobresult';
import {Observable} from 'rxjs/Rx';
import {map, startWith} from 'rxjs/operators';
import {RouterService} from '../router.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SkillfamilyComponent} from '../skillfamily/skillfamily.component';
import {DetailsService} from '../details.service';

@Component({
  selector: 'app-searchjob',
  templateUrl: './searchjob.component.html',
  styleUrls: ['./searchjob.component.css']
})
export class SearchjobComponent implements OnInit {
usersearch:Usersearch = new Usersearch();
jobresults:Array<Object> = [];
errMessage='';
userId = '1';
skillfamily: string;
skillset: string;
  constructor(private notesService:NotesService,
  			  private routerService: RouterService,
  			  public dialog: MatDialog,
  			  private detailsService:DetailsService ){
  }
  
  techControl: FormControl = new FormControl();
  techoptions = this.detailsService.getSkillSet();
  filteredTechOptions: Observable<string[]>;
  
  
  locationControl = new FormControl();
  locationGroups =  this.detailsService.getLocationDeatils();
  
  step = 0;
  
  ngOnInit(){
  
  this.filteredTechOptions = this.techControl.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val))
    );
    /*this.notesService.getNotes().subscribe(
      data=>this.notes=data,
      err=>{this.errMessage="Unable to Retrieve All Notes.Please try after sometime";}
    )*/
  }
  
   filter(val: string): string[] {
   
   //console.log(val)
   //console.log(this.skillset)
   this.skillfamily="";
   if(this.detailsService.isValidSkillSet(val)){
    let dialogRef = this.dialog.open(SkillfamilyComponent, {
      width: '250px',
      data: { skillfamily: this.skillfamily}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.skillfamily = result;
    });
    }
    
    return this.techoptions.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  searchJob(){
   
      if(this.usersearch.skillSet===''){
        this.errMessage="Skill Set are Required";
      }else{
      		this.step = 1;
      		this.jobresults = this.detailsService.getJobList(this.userId,this.usersearch.skillSet,this.skillfamily);
          	this.usersearch=new Usersearch();
        	this.errMessage="";
        	console.log(this.jobresults)
      }
  }
  
  applyJob(jobId){
  	console.log(jobId)
  }

}
