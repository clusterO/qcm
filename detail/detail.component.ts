import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {

  response = false;
  question = true;
  id: number;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  onTabChange($event): void {
    if ($event['tab']['textLabel'] === 'QUESTIONS') {
      this.question = true; this.response = false;
    } else {
      this.question = false; this.response = true;
    }
  }

}
