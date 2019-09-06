import {   Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  ElementRef,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @Input() title: string;
  @Input() body: string;
  @Input() logo: string;
  @Input() button: string;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelect = new EventEmitter<boolean>();

  constructor() {}

  selectEvent($event) {
    this.onSelect.emit($event);
  }
}
