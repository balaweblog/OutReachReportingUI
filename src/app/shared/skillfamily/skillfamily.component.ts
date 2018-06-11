import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';

import { DetailsService } from '../../core/details.service';
import { UtilitiesService } from '../../core/utilities.service';

@Component({
  selector: 'app-skillfamily',
  templateUrl: './skillfamily.component.html',
  styleUrls: ['./skillfamily.component.css']
})

export class SkillfamilyComponent implements OnInit {

  toppings:FormControl;
  toppingList: string[] = [];
  primary: string;

 constructor(public dialogRef: MatDialogRef<SkillfamilyComponent>, private utilitiesService:UtilitiesService,
   @Inject(MAT_DIALOG_DATA) public data: any) {
    this.primary = this.data.primary;
   }

  ngOnInit() {
    this.toppings = new FormControl();
    this.utilitiesService.getskillset().subscribe(
      data => {
           for (let key in data) {
             if (this.primary === data[key].primary) {
                    this.toppingList.push(data[key].secondary);
             }
           }
        }
     );
  }

  onNoClick(): void {
    this.dialogRef.close({data: this.toppingList});
  }
}
