import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

//class App extends Component {
//render() {
class App extends Component {
	state = {
		ninjas: [
			{ name: 'pepe', age: 30, belt: 'black', id: 1 },
			{ name: 'maria', age: 45, belt: 'green', id: 2 },
			{ name: 'milena', age: 22, belt: 'black', id: 3 }
		]
	};

	addNinja = ninja => {
		ninja.id = Math.random();
		let ninjas = [...this.state.ninjas, ninja];
		console.log(ninjas);
		this.setState({
			ninjas: ninjas
		});
	};
	deleteNinja = id => {
		let ninjas = this.state.ninjas.filter(ninja => ninja.id !== id);
		this.setState({
			ninjas: ninjas
		});
	};
	componentDidUpdate(prevProps, prevState) {
		console.log('component updated');
		console.log(prevProps);
		console.log(prevState);
	}
	render() {
		return (
			<div className='App'>
				<h1>Hola mundo</h1>

				<Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
				<AddNinja addNinja={this.addNinja} />
			</div>
		);
	}
}

export default App;
