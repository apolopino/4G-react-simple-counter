import React, { useState } from "react";
import PropTypes from "prop-types";
import Clock from "./clock.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export function Home() {
	const [seconds, setSeconds] = useState(0);

	// function tick() {
	// 	useState(seconds + 1);
	// }
	// setInterval(tick, 1000);

	return (
		<div>
			<Clock count={seconds} />
		</div>
	);
}
