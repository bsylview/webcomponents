import { LitElement, html } from 'lit-element';
import { Styles } from './styles.js';

class CardComponent extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      body: { type: String },
      button: { type: String },
      logo: { type: String }
    }
  }

  static get styles() {
    return [ Styles ];
  }

  onClick() {
    this.dispatchEvent(new CustomEvent('selectButton'));
  }

  render() {
    return html`
        <div class="card">
        <div class="header">
          <img alt="Logo" class="logo" src=${this.logo} />
          <div class="title">
            ${this.title}
          </div>
        </div>
        <div class="body">
          ${this.body}
        </div>
        <div class="footer">
          <button class="button" @click=${this.onClick}>
            ${this.button}
          </button>
        </div>
      </div>
    `;
  }
}

window.customElements.define('lit-card-component', CardComponent);
