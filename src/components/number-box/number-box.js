import React from 'react';
import './number-box.css';

const NumberBox = (props) => {
	return (
		<div className="number-box">
			<p className="number">{props.number}</p>
		</div>
	)
}

export default NumberBox;