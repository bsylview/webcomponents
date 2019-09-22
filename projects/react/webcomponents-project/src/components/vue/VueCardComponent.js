import React, { Component } from 'react';
import vueLogo from '../../logos/vue.svg';

class VueCardComponent extends Component {

  selectButton = event => {
    if (this.props.onSelect){
      this.props.onSelect(event, vueLogo);
    }
    console.log(event);
  }

  componentDidMount() {
    const vueElement = document.querySelector('vue-card-component');
    vueElement.addEventListener('selectButton', this.selectButton);
  }

  render() {
    return (
        <vue-card-component
            title="Welcome from Vue.js WebComponent"
            button="Log event from Vue.js!"
            logo={vueLogo}
        />
    );
  }
}

export default VueCardComponent;
