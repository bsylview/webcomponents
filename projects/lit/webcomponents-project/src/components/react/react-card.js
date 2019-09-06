import { LitElement, html } from 'lit-element';
import '../../webcomponents/react-card-component';
import { ReactComponentStyles } from './react-component-styles';

class ReactCard extends LitElement {
  static get properties() {
    return {
      reactCardId: { type: String },
      onSelect: { type: Function }
    }
  }

  static get styles() {
    return [
      ReactComponentStyles
    ];
  }


  constructor() {
    super();
    this.reactCardId = 'react-card-component';
  }

  firstUpdated() {
    this.shadowRoot.addEventListener('onSelect', (e) => this.onSelect(e));
  }

  onSelect(event) {
    let customEvent = new CustomEvent('onClick', {
      detail: {
        logo: "./src/assets/logos/react.svg"
      }
    });

    this.dispatchEvent(customEvent);
    console.log(event);
  }

  render() {
    const customCardStyle = ".card{color:red}";
    return html`
        <react-card-component
          id="${this.reactCardId}"
          title="Welcome from React WebComponent"
          logo="./src/assets/logos/react.svg"
          button="Log event from React!"
          onSelect="${this.onSelect}"
        />
    `;
  }
}

window.customElements.define('react-card', ReactCard);
