import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormstatsService } from '../formstats.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {

  constructor(private router: Router,
              private formstatsService: FormstatsService) {}
  ngOnInit() {}

  logout(): void {
    this.formstatsService.logout()
    .subscribe(data => {
      if (data) {
        this.router.navigate(['']);
      }});
  }
}
