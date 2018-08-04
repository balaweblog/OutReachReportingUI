import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CryptoService } from '../core/crypto.service';
import { MasterheaderComponent } from '../layout/masterheader/masterheader.component';
import { JobService } from '../core/job.service';
import { ProfileService } from '../core/profile.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor( private router: Router, private route: ActivatedRoute, private cryptoservice: CryptoService,
  private jobservice: JobService, private profileService: ProfileService) { }

  ngOnInit() {
    var backAgain = this.route.snapshot.params;
    this.cryptoservice.decrypt(backAgain['']).subscribe(
      data => {
            let output = JSON.parse(data);
            localStorage.setItem('email', output['email']);
            localStorage.setItem('token', output['token']);
            localStorage.setItem('photo', output['photo']);
            this.profileService.hasuserprofile(localStorage.getItem('email')).then( f => {
                this.jobservice.hasappliedjobbyemail(localStorage.getItem('email')).then
              (e => {
                if ( e  === true && f === true) {
                  this.router.navigate(['applyjob']);
              } else {
                  this.router.navigate(['profile']);
              }
              }
            );
          });
      });
  }
}
