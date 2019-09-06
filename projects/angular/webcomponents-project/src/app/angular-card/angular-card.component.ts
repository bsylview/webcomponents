import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-angular-card',
  templateUrl: './angular-card.component.html',
  styleUrls: ['./angular-card.component.scss']
})
export class AngularCardComponent implements OnInit {
  @Output() select = new EventEmitter<string>();
  @Input() logo: string;

  constructor() {
    this.logo = '../../assets/logos/angular.svg';
  }

  ngOnInit() {
  }

  selectEvent($event) {
    console.log($event);
    this.select.emit(this.logo);
  }

}
