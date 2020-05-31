import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Parallax from './components/Parallax';
import Pic1 from './assets/pic1.jpg';
import Pic2 from './assets/pic2.jpg';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<Parallax image={Pic1} />
				<AboutMe />
				<Parallax image={Pic2} />
				<Portfolio />
				<Contact />
			</div>
		);
	}
}

export default App;
