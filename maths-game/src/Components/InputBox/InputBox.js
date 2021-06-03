import React from 'react';
import 'tachyons';
import './inputbox.css'
import FadeIn from 'react-fade-in';


const InputBox = () => {
	return (
		<FadeIn className="input">
			<div className="center pa4 form">
				<input className="f4  pa2 w-70 center" type="number" placeholder="Enter your answer here:"/>
				<button className="w-30 grow f4 ph3 pv2 white bg-pink shadow">Check</button>
			</div>
		</FadeIn>

	)
}

export default InputBox;