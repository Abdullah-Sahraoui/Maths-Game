import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Numbers from '../Components/Numbers/numbers.js';
import './App.css';


function App() {
  const renderTime = ({ remainingTime }) => {
		return (
			<div className="timer">
				<div className="text">Remaining</div>
				<div className="value">{remainingTime}</div>
				<div className="text">seconds</div>
			</div>
		)
	}


	const [start, setStart] = useState(true);

	if (start) {
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
						duration={60}
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
