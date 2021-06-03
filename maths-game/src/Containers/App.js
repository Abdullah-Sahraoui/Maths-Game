import React, { useState } from 'react';
import Numbers from '../Components/Numbers/numbers.js';
import './App.css';
import FadeIn from 'react-fade-in';


function App() {
  
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
				<Numbers />
			</div>
		)
	}
}

export default App;
