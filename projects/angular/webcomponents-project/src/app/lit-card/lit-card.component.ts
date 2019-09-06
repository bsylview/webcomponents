import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lit-card',
  templateUrl: './lit-card.component.html',
  styleUrls: ['./lit-card.component.scss']
})
export class LitCardComponent implements OnInit {
  @Output() select = new EventEmitter<any>();
  @Input() logo: string;

  constructor() {
    this.logo = '../../assets/logos/polymer.svg';
  }

  ngOnInit() {
  }

  selectEvent($event) {
    console.log($event);
    this.select.emit(this.logo);
  }
}
