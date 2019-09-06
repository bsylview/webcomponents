import { LitElement, html, css } from 'lit-element';
import './angular/angular-card';
import './react/react-card';
import './litelement/lit-card';
import './vue/vue-card';
import './header-card';

class PolymerApp extends LitElement {
  static get properties() {
    return {
      selectedLogo: { type: String },
      onSelect: { type: Function }
    }
  }

  constructor(){
    super();
    this.selectedLogo = "./src/assets/logos/polymer.svg";
  }

  onSelect(event) {
    this.selectedLogo = event.detail.logo;
  }

  render() {
    return html`
      <header-card logo=${this.selectedLogo} ></header-card>
      <lit-card @onClick=${this.onSelect} ></lit-card>
      <angular-card @onClick=${this.onSelect} ></angular-card>
      <react-card @onClick=${this.onSelect} ></react-card>
      <vue-card @onClick=${this.onSelect} ></vue-card>
    `;
  }
}

window.customElements.define('polymer-app', PolymerApp);
