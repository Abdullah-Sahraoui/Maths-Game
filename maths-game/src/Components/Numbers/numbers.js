import React from 'react';
import 'tachyons';
import './numbers.css';
import FadeIn from 'react-fade-in';
import InputBox from '../InputBox/InputBox.js';

const Numbers = () => {
	return (
		<FadeIn className="numbers">
			{/*For the numbers and operations:*/}
			<div className="tc fl w-100 pa3">
	      <div className="fl w-40 num-one positioning">N1</div>
	      <div className="fl w-20 operation positioning">O</div>
	      <div className="fl w-40 num-two positioning">N2</div>
			</div>

			{/*For the input box:*/}
			<InputBox />
		</FadeIn>
	);
}

export default Numbers;