import { LitElement, html } from 'lit-element';
import '../../webcomponents/lit-card-component';

class LitCard extends LitElement {
  static get properties() {
    return {
      selectButton: { type: Function }
    }
  }

  selectButton(event) {
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
          @selectButton=${this.selectButton}
        />
    `;
  }
}

window.customElements.define('lit-card', LitCard);
