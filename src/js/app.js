require("../scss/style.scss");
import React, {Component} from 'react';
import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (

    	<div>

	    	<header className="header">

	    		<div className="container">

	    			<div className="columns">

	    				<div className="column is-two-thirds">
		    				<h1 className="title is-1 logo">
		    					<a href="/">Shirito<span>ri</span></a>
		    				</h1>
		    			</div>

		    			<div className="column">
		    				<Navigation></Navigation>
		    			</div>

		    		</div>


		    	</div>

			</header>

			<section className="section">

				<div className="container">


					<div className="columns">
						<div className="column is-two-thirds content is-medium">
		    			
							<h2 className="title is-2">Test</h2>
							<p className="size-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor <strong>incididunt ut</strong> labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation <a href="link">ullamco laboris</a> nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

						</div>

						<div className="column">

							<h3 className="title is-3">Sidebar!!!</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
						</div>
					</div>

				</div>
			</section>


			<footer className="footer">

				<div className="container">

					<div className="columns">

						<div className="column is-two-thirds">
							<ul class="nav">
								<li class="nav-item">
									<a href="#">About</a>
								</li>
								<li class="nav-item">
									<a href="#">Contact</a>
								</li>
							</ul>
						</div>

						<div className="column has-text-right">
							<p>made with &hearts;</p>
						</div>
					</div>
				</div>

			</footer>
		</div>
    );
  }
}

export default App;