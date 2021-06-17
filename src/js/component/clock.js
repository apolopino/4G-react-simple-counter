import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Clock(props) {
	return (
		<div className="row d-flex justify-content-center">
			<div className="box lg text-center">
				<span className="far fa-clock"></span>
			</div>
			<div className="box text-center">{props.cmil}</div>
			<div className="box text-center">{props.dmil}</div>
			<div className="box text-center">{props.mil}</div>
			<div className="box text-center">{props.cen}</div>
			<div className="box text-center">{props.dec}</div>
			<div className="box text-center">{props.uni}</div>
		</div>
	);
}

Clock.propTypes = {
	uni: PropTypes.number,
	dec: PropTypes.number,
	cen: PropTypes.number,
	mil: PropTypes.number,
	dmil: PropTypes.number,
	cmil: PropTypes.number
};
