import React from "react";
import PropTypes from "prop-types";

export function Jumbotron(props) {
	return (
		<header className="jumbotron my-5">
			<h1 className="display-3">{props.tittle}</h1>
			<p className="lead">{props.text}</p>
			<a href="#" className="btn btn-primary btn-lg">
				{props.btnLabel}
			</a>
		</header>
	);
}

Jumbotron.propTypes = {
	tittle: PropTypes.string,
	text: PropTypes.string,
	btnLabel: PropTypes.string
};
