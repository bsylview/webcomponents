import React, { Component } from 'react';
import polymerLogo from '../../logos/polymer.svg';

class LitCardComponent extends Component {

  selectButton = event => {
    if (this.props.onSelect){
      this.props.onSelect(event, polymerLogo);
    }
    console.log(event);
  }

  componentDidMount() {
    const myElement = document.querySelector('lit-card-component');
    myElement.addEventListener('selectButton', this.selectButton);
  }

  render() {
    return (
      <div className="card">
        <lit-card-component
          title="Welcome from Lit WebComponent"
          logo={polymerLogo}
          button="Log event from Lit!"
        />
      </div>
    );
  }
}

export default LitCardComponent;
