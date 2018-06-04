import { Component, OnInit } from '@angular/core';
import { RouterService } from '../router.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SkillfamilyComponent } from '../skillfamily/skillfamily.component';
import {FormControl} from '@angular/forms'
import {Observable} from 'rxjs/Rx';
import {map, startWith} from 'rxjs/operators';
import {Userprofile} from '../userprofile';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userprofile:Userprofile = new Userprofile();
skillfamily : string;
firstFormGroup: FormGroup;
secondFormGroup: FormGroup;

  techControl: FormControl = new FormControl();
  techoptions = this.detailsService.getSkillSet();
  filteredTechOptions: Observable<string[]>;
  
  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog,private detailsService:DetailsService) { }
  
  
  locationControl = new FormControl();
  locationGroups =  this.detailsService.getLocationDeatils();

  ngOnInit() {
     this.filteredTechOptions = this.techControl.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val))
    );
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  
filter(val: string): string[] {
   this.userprofile.skillFamily="";
   if(this.detailsService.isValidSkillSet(val)){
    let dialogRef = this.dialog.open(SkillfamilyComponent, {
      width: '250px',
      data: { skillfamily: this.userprofile.skillFamily,skillset: this.userprofile.skillSet}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.skillfamily = result;
    });
    }
    return this.techoptions.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

}
