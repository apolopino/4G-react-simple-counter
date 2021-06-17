import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Clock from "./clock.js";

export function Home(props) {
	// const initalState = 0;
	// const [count, setCount] = useState(0);

	// useEffect(() => {
	// 	setInterval(() => {
	// 		setCount(old => old + 1);
	// 	}, 1000);
	// }, []);
	//no entiendo porque se usa un parametro old. Es un metodo? quien lo define?

	let numero = Array.from(String(props.tiempo));
	let unidad = numero.length - 1;
	let decena = numero.length - 2;
	let centena = numero.length - 3;
	let miles = numero.length - 4;
	let diezMiles = numero.length - 5;
	let cienMiles = numero.length - 6;

	return (
		<div>
			<Clock
				uni={numero[unidad]}
				dec={numero[decena] >= 0 ? numero[decena] : "0"}
				cen={numero[centena] >= 0 ? numero[centena] : "0"}
				mil={numero[miles] >= 0 ? numero[miles] : "0"}
				dmil={numero[diezMiles] >= 0 ? numero[diezMiles] : "0"}
				cmil={numero[cienMiles] >= 0 ? numero[cienMiles] : "0"}
			/>
		</div>
	);
}
Home.propTypes = {
	tiempo: PropTypes.number
};
