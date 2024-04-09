import React from 'react';
import NumberBox from '../number-box/number-box';
import ButtonsBox from '../buttons/buttons';
import './app.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		};
	}

	incNumber = () => {
		this.setState(state => ({
			number: (state.number === -50) ? state.number : state.number - 1
		}));
	}

	decNumber = () => {
		this.setState(state => ({
			number: (state.number === 50) ? state.number : state.number + 1
		}))
	}

	rndNumber = () => {
		const randNumber = Math.floor(Math.random() * 101) - 50
		this.setState(state => ({
			number: randNumber
		}))
	}

	resetNumber = () => {
		this.setState(state => ({
			number: 0
		}))
	}

	render() {
		return (
			<div className="app">
				<NumberBox number={this.state.number} />
				<ButtonsBox
					incNumber={this.incNumber}
					decNumber={this.decNumber}
					rndNumber={this.rndNumber}
					resetNumber={this.resetNumber}
				/>
			</div>
		);
	}
}

export default App;