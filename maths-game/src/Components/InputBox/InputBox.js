import React, { useState } from 'react';
import 'tachyons';
import './inputbox.css'
import FadeIn from 'react-fade-in';

const checkAnswer = (values, userValue) => {
	switch (values.operation) {
		case "x":
			return(values.n1 * values.n2 === parseInt(userValue, 10)) ? true : false;
		case "÷":
			return(values.n1 / values.n2 === parseInt(userValue, 10)) ? true : false;
		case "+":
			return(values.n1 + values.n2 === parseInt(userValue, 10)) ? true : false;
		case "-":
			return(values.n1 - values.n2 === parseInt(userValue, 10)) ? true : false;
		default:
			break;
	}
}


const InputBox = (props) => {
	const [userValue, setUserValue] = useState(0);

	return (
		<FadeIn className="input">
			<div className="center pa4 form">
				<input className="f4  pa2 w-70 center" type="number" placeholder="Enter your answer here:" onChange={(e) => setUserValue(e.target.value)} />
				<button className="w-30 grow f4 ph3 pv2 white bg-pink shadow" onClick={() => checkAnswer(props.values, userValue)}>Check</button>
			</div>
		</FadeIn>

	)
}

export default InputBox;