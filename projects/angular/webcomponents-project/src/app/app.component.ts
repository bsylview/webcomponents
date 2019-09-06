import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedLogo = '../assets/logos/angular.svg';

  onSelect($logo) {
    this.selectedLogo = $logo;
  }
}
