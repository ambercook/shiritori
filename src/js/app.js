require("../scss/style.scss");
import React, {Component} from 'react';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
    	<div className="app">
	    	<h1>Shiritori</h1>
	    	<Navigation></Navigation>
	    </div>
    );
  }
}
export default App;