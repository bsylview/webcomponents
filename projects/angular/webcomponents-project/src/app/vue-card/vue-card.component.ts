import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vue-card',
  templateUrl: './vue-card.component.html',
  styleUrls: ['./vue-card.component.scss']
})
export class VueCardComponent implements OnInit {
  @Output() select = new EventEmitter<string>();
  @Input() logo: string;

  constructor() {
    this.logo = '../../assets/logos/vue.svg';
  }

  ngOnInit() {
  }

  selectEvent($event) {
    console.log($event);
    this.select.emit(this.logo);
  }
}
