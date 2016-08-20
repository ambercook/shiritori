require("../scss/style.scss");
import React, {Component} from 'react';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (

    	<div class="container">
		      

	    	<header className="header">
		    	<h1 class="title">Shiritori</h1>
		    	<Navigation></Navigation>
		    </header>
		</div>
    );
  }
}
export default App;