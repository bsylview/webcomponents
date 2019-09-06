import { html, css } from 'lit-element';
import { LitElement } from 'lit-element';

class HeaderCard extends LitElement {
  static get properties() {
    return {
      logo: { type: String }
    }
  }

  static get styles() {
    return [
      css`
        .wrapper {
          display: grid;
          justify-content: center;
          align-items: center;
          margin: 3rem;
          text-align: center;
        }

        .mainLogo {
          height: 7rem;
          justify-self: center;
        }
      `
    ];
  }

  render() {
    return html`
      <div class='wrapper'>
        <h1>Using WebComponents in LitElement</h1>
        <h2>Selected</h2>
        <img class='mainLogo' src=${this.logo} />
      </div>
    `;
  }
}

window.customElements.define('header-card', HeaderCard);
