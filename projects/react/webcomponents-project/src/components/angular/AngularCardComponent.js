import React, { Component } from 'react';
import angularLogo from '../../logos/angular.svg';

class AngularCardComponent extends Component {

  onSelect = event => {
    if (this.props.onSelect){
      this.props.onSelect(event, angularLogo);
    }
    console.log(event);
  }

  componentDidMount() {
    const myElement = document.querySelector('angular-card-component');
    myElement.addEventListener('onSelect', this.onSelect);
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
