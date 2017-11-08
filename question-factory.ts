import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHost]',
})
export class QuestionFactoryDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
