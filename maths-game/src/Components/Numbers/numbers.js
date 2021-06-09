import React from 'react';
import 'tachyons';
import './numbers.css';
import FadeIn from 'react-fade-in';
import InputBox from '../InputBox/InputBox.js';

const getRndInteger = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
}

const insertNums = () => {
	const operationsList = ["x", "÷", "+", "-"];

	let n1 = getRndInteger(-9, 9);
	let n2 = getRndInteger(-9, 9);
	let operation = operationsList[getRndInteger(0, operationsList.length)];

	return {n1, n2, operation};
}

const Numbers = () => {
	return (
		<FadeIn className="numbers">
			{/*For the numbers and operations:*/}
			<div className="tc fl w-100 pa3">
	      <div className="fl w-40 num-one positioning"></div>
	      <div className="fl w-20 operation positioning"></div>
	      <div className="fl w-40 num-two positioning"></div>
			</div>

			{/*For the input box:*/}
			<InputBox values={insertNums()}/>
		</FadeIn>
	);
}

export default Numbers;