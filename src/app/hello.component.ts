import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{name}}!</h1>
    <p> {{message}} </p>
    <p> {{num}} </p>
    <input type = "text" (keyup) = sendMessage(message) [(ngModel)] = "message">
  `,
  styles: [`h1 { font-family: Lato; }`],
  inputs: ['name', 'message'],
})
export class HelloComponent {
  name: string;
  message: string;
  @Input('digit') num: number;

  @Output() messageEvent: EventEmitter<string> = new EventEmitter<string>();

  sendMessage(message) {
    this.message = message;
    this.messageEvent.emit(this.message);
  }
}
