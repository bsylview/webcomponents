import React, { Component } from 'react';
import angularLogo from '../../logos/angular.svg';

class AngularCardComponent extends Component {

  selectButton = event => {
    if (this.props.onSelect){
      this.props.onSelect(event, angularLogo);
    }
    console.log(event);
  }

  componentDidMount() {
    const myElement = document.querySelector('angular-card-component');
    myElement.addEventListener('selectButton', this.selectButton);
  }

  render() {
    return (
       <angular-card-component
          title="Welcome from Angular WebComponent"
          logo={angularLogo}
          button="Log event from Angular!"
        />
    );
  }
}

export default AngularCardComponent;
