import React, { Component } from 'react';

export default class Navigation extends Component {

  render() {
    return (
    	<nav className="nav">
    		<ul className="nav-right">
                <li>
                    <a href="#" className="button is-primary is-medium">New Game</a>
    			</li>
    		</ul>
    	</nav>
    );
  }
  
}