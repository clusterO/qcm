import { Input, ViewChild, Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormstatsService } from '../formstats.service';
import { Element, Question } from '../data-interfaces.module';
import { QuestionFactoryDirective } from '../question-factory';

import { trigger,
         state,
         style,
         transition,
         animate } from '@angular/animations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  animations: [
    trigger('cardState', [
      state('active',
             style({ 'box-shadow': '0 9px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
                                   'border-left': '5px solid blue',
                                   'z-index': '3' })),

      state('inactive',
             style({ 'box-shadow': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                                   'z-index': '0' })),

      transition('inactive <=> active',
                  animate('100ms ease-out'))
    ])
  ]
})
export class QuestionComponent implements OnInit {

  id: number;
  questions: Question[];
  index: number;
  form = new Element;

  @Input() question: Question[];
  @ViewChild(QuestionFactoryDirective) appHost: QuestionFactoryDirective;

  constructor(private route: ActivatedRoute,
              private formstatsService: FormstatsService,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getForm(this.id);
    });
  }

  getForm(id: number): void {
    this.formstatsService.formById(id)
    .map(res => {
      this.form = res['form'][0];
      this.questionList(this.id);
    })
    .subscribe();
  }

  questionList(id: number): void {
    this.formstatsService.questionList(id)
    .map(res => {
      this.questions = res['questions'];
    })
    .subscribe();
  }

  toggleState(question: Question, index: number) {
    question.state = question.state === 'active' ? 'inactive' : 'active';
    if (this.index !== undefined && this.index !== index) {
      this.questions[this.index].state = 'inactive';
    }
    this.index = index;
  }

}
