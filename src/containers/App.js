import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Welcome to React class, you're awesome!</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and saaave to reload.
				</p>
				<h3>Current Page:</h3>
				{this.props.children}
			</div>
		);
	}
}

export default App;
