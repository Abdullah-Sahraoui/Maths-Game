import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Numbers from '../Components/Numbers/numbers.js';
import './App.css';


function App() {
	// Check if timer == 0
  const renderTime = ({ remainingTime }) => {
		if (remainingTime == 0) {
			// Return to start page if timer == 0
			setStart(true);
		}
		return (
			<div className="timer">
				<div className="text">Remaining</div>
				<div className="value">{remainingTime}</div>
				<div className="text">seconds</div>
			</div>
		)
	}


	// Check for start value
	const [start, setStart] = useState(true);

	// Handle start value
	if (start) {
		console.log(start)
		return (
			<div className="main-wrapper">
				<div className="button-container">
					<button className="start ba b--light-blue tc grow" onClick={() => setStart(false)}>
						Start
					</button>
				</div>
			</div>
		);
	} else {
		return (
			<div className="main-wrapper">
				<div className="timer-wrapper">
					<CountdownCircleTimer
						isPlaying
						strokeWidth={18}
						isLinearGradient="true"
						trailColor="lightgrey"
						duration={3}
						size={300}
						colors={[
							["#0099ff"],
							["#00e699"],
						]}
					>
						{renderTime}
					</CountdownCircleTimer>
				</div>

				<Numbers />
			</div>
		)
	}
}

export default App;
