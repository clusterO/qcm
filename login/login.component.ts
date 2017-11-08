import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormstatsService } from '../formstats.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  state = '';
  email = '';
  password = '';

  constructor(private router: Router,
              private formstatsService: FormstatsService) {}

  ngOnInit() {}

  login(): void {
    this.formstatsService.login(this.email, this.password)
    .subscribe(data => {
      if (data === 'ADMIN_PAGE') {
        this.router.navigate(['dashboard']);
      }});
  }

}
