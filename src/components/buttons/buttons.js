import React from 'react';
import './buttons.css';

class ButtonsBox extends React.Component {

	render() {
		return (
			<div className="buttons-box">
				<button className="btn btn-inc" onClick={this.props.incNumber}>INC</button>
				<button className="btn btn-dec" onClick={this.props.decNumber}>DEC</button>
				<button className="btn btn-rnd" onClick={this.props.rndNumber}>RND</button>
				<button className="btn btn-reset" onClick={this.props.resetNumber}>RESET</button>
			</div>
		)
	}
}

export default ButtonsBox;