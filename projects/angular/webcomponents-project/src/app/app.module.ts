import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LitCardComponent } from './lit-card/lit-card.component';
import { ReactCardComponent } from './react-card/react-card.component';
import { VueCardComponent } from './vue-card/vue-card.component';
import { AngularCardComponent } from './angular-card/angular-card.component';

import '../assets/web-components/lit-card-component.js';
import '../assets/web-components/vue-card-component.js';
import '../assets/web-components/react-card-component.js';

@NgModule({
  declarations: [
    AppComponent,
    LitCardComponent,
    ReactCardComponent,
    VueCardComponent,
    HeaderComponent,
    AngularCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
