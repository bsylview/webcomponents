import React, { Component } from 'react';
import reactLogo from '../../logos/react.svg';
import './styles.css';

class HeaderComponent extends Component {

  render() {
    const logoSrc = this.props.selectedLogo ? this.props.selectedLogo : reactLogo;
    return (
      <div className='wrapper'>
        <h1>Using WebComponents in React</h1>
        <h2>Selected</h2>
        <img className='mainLogo' src={logoSrc} />
      </div>
    );
  }
}

export default HeaderComponent;
