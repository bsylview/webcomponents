import { LitElement, html } from 'lit-element';
import '../../webcomponents/angular-card-component';

class AngularCard extends LitElement {
  static get properties() {
    return {
      selectButton: { type: Function }
    }
  }

  selectButton(event) {
    let customEvent = new CustomEvent('onClick', {
      detail: {
        logo: "./src/assets/logos/angular.svg"
      }
    });

    this.dispatchEvent(customEvent);
    console.log(event);
  }

  render() {
    return html`
        <angular-card-component
          title="Welcome from Angular WebComponent"
          logo="./src/assets/logos/angular.svg"
          button="Log event from Angular!"
          @selectButton=${this.selectButton}
        />
    `;
  }
}

window.customElements.define('angular-card', AngularCard);
