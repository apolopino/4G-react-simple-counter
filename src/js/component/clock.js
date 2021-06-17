import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Clock(props) {
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
			<div className="box text-center">{props.count}</div>
		</div>
	);
}

Clock.propTypes = {
	count: PropTypes.number
};
