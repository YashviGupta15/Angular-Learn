import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{name}}!</h1>
    <p> {{message}} </p>
    <p> {{num}} </p>
  `,
  styles: [`h1 { font-family: Lato; }`],
  inputs: ['name', 'message'],
})
export class HelloComponent {
  name: string;
  message: string;
  @Input('digit') num: number;
}
