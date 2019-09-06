import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-react-card',
  templateUrl: './react-card.component.html',
  styleUrls: ['./react-card.component.scss']
})
export class ReactCardComponent implements OnInit {
  @Output() select = new EventEmitter<string>();
  @Input() logo: string;

  constructor() {
    this.logo = '../../assets/logos/react.svg';
  }

  ngOnInit() {
  }

  selectEvent($event) {
    console.log($event);
    this.select.emit(this.logo);
  }
}
