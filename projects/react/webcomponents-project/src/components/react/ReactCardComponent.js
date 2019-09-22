import React, { Component } from 'react';
import reactLogo from '../../logos/react.svg';

class ReactCardComponent extends Component {

  onClick = event => {
    if (this.props.onSelect){
      this.props.onSelect(event, reactLogo);
    }
    console.log(event);
  }

  componentDidMount() {
    const cardComponent = document.getElementById('react-card-component');
    cardComponent.addEventListener('onClick', this.onClick);
  }

  render() {
    return (
        <react-card-component
            id="react-card-component"
            title="Welcome from React WebComponent"
            logo={reactLogo}
            button="Log event from React!"
        />
    );
  }
}

export default ReactCardComponent;
