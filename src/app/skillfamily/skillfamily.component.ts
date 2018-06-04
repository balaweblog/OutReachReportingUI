import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms'
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-skillfamily',
  templateUrl: './skillfamily.component.html',
  styleUrls: ['./skillfamily.component.css']
})
export class SkillfamilyComponent implements OnInit {

 constructor(public dialogRef: MatDialogRef<SkillfamilyComponent>,private detailsService:DetailsService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    
 toppings = new FormControl();
 toppingList = this.detailsService.getSkillFamily(this.data.skillset);
 
 
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
