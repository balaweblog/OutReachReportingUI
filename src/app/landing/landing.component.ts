import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoService } from '../core/crypto.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  response: any;
  constructor( private router: Router, private route: ActivatedRoute, private cryptoservice: CryptoService) { }

  ngOnInit() {
    var backAgain = this.route.snapshot.params;
    this.cryptoservice.decrypt(backAgain['']).subscribe(
      data => {
            let output = JSON.parse(data);
            localStorage.setItem('email', output['email']);
            localStorage.setItem('token', output['token']);
            this.router.navigate(['profile']);
      });
  }
}
