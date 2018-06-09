import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';

import { DetailsService } from '../../core/details.service';

@Component({
  selector: 'app-skillfamily',
  templateUrl: './skillfamily.component.html',
  styleUrls: ['./skillfamily.component.css']
})

export class SkillfamilyComponent implements OnInit {

  toppings:FormControl;
  toppingList:any;

 constructor(public dialogRef: MatDialogRef<SkillfamilyComponent>, private detailsService:DetailsService,
   @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.toppings = new FormControl();
    this.toppingList = this.detailsService.getSkillFamily(this.data.skillset);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
