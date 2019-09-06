import React, { Component } from 'react';
import LitCardComponent from './components/litelement/LitCardComponent';
import ReactCardComponent from './components/react/ReactCardComponent';
import AngularCardComponent from './components/angular/AngularCardComponent';
import VueCardComponent from './components/vue/VueCardComponent';
import HeaderComponent from './components/react/HeaderComponent';

class App extends Component {
  state={
    selectedLogo: '',
  }

  onSelect = (event, logo) => {
    this.setState({selectedLogo: logo});
  }

  render() {
    return (
      <div>
        <HeaderComponent selectedLogo={this.state.selectedLogo} />
        <ReactCardComponent onSelect={this.onSelect} />
        <LitCardComponent onSelect={this.onSelect} />
        <VueCardComponent onSelect={this.onSelect} />
        <AngularCardComponent onSelect={this.onSelect} />
      </div>
    );
  }
}

export default App;
