import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
    constructor(){
      super()
      this.state = {
  // updateColor
      fontColor: 'black',
  // updateSize
      fontSize: 12,
  // updateFamily
      fontFamily: 'monospace',
  // updateEditStatus
      allowEdit: 'true'
  }
}

updateColor(val) {
  this.setState({ fontColor: val });
}

updateSize(val) {
  this.setState({ fontSize: val });
}

updateFamily(val) {
  this.setState({ fontFamily: val });
}

updateEditStatus(val) {
  this.setState({ allowEdit: val });
}

  render() {
    return (
      <div>
        <div className="headerBar">
          {/* Render EditToggle */}
          {/* Render ColorChanger */}
          {/* Render SizeChanger */}
          {/* Render FamilyChanger */}
        </div>
        <div className="textArea">{/* Render TextContainer */}</div>
      </div>
    );
  }
}

export default App;
