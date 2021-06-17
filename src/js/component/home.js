import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [count, setCount] = useState(0);
	// function tick() {
	// 	useState(count + 1);
	// }
	// setInterval(tick, 1000);
	setInterval(useState, 1000);

	return (
		<div className="row d-flex justify-content-center">
			<div className="box lg text-center">
				<span className="far fa-clock"></span>
			</div>
			<div className="box text-center">0</div>
			<div className="box text-center">0</div>
			<div className="box text-center">0</div>
			<div className="box text-center">0</div>
			<div className="box text-center">0</div>
			<div className="box text-center">{useState(count + 1)}</div>
		</div>
	);
}
