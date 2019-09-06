import { LitElement, html } from 'lit-element';
import '../../webcomponents/lit-card-component';

class LitCard extends LitElement {
  static get properties() {
    return {
      onSelect: { type: Function }
    }
  }

  onSelect(event) {
    let customEvent = new CustomEvent('onClick', {
      detail: {
        logo: "./src/assets/logos/polymer.svg"
      }
    });

    this.dispatchEvent(customEvent);
    console.log(event);
  }

  render() {
    return html`
        <lit-card-component
          title="Welcome from Lit WebComponent"
          logo="./src/assets/logos/polymer.svg"
          button="Log event from Lit!"
          @onSelect=${this.onSelect}
        />
    `;
  }
}

window.customElements.define('lit-card', LitCard);
