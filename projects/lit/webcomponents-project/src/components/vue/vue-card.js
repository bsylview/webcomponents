import { LitElement, html } from 'lit-element';

class VueCard extends LitElement {
  static get properties() {
    return {
      selectButton: { type: Function }
    }
  }

  selectButton(event) {
    let customEvent = new CustomEvent('onClick', {
      detail: {
        logo: "./src/assets/logos/vue.svg"
      }
    });

    this.dispatchEvent(customEvent);
    console.log(event);
  }

  render() {
    return html`
        <Vue-card-component
          title="Welcome from Vue WebComponent"
          logo="./src/assets/logos/vue.svg"
          button="Log event from Vue!"
          @selectButton=${this.selectButton}
        />
    `;
  }
}

window.customElements.define('vue-card', VueCard);
