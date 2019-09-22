import {   Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  /** Use Shadow DOM to encapsulate styles. */
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @Input() title: string;
  @Input() body: string;
  @Input() logo: string;
  @Input() button: string;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() selectButton = new EventEmitter<boolean>();

  constructor() {}

  selectEvent($event) {
    this.selectButton.emit($event);
  }
}
