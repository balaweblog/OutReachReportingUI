import {map} from 'rxjs/operators/map';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { startWith} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatSnackBar} from '@angular/material';
import { UtilitiesService } from '../core/utilities.service';
import { AppliedJob } from '../models/applied';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

constructor(public dialog: MatDialog, private utilitiesService:UtilitiesService, private snackBar: MatSnackBar) {

}
ngOnInit() {

}
}
