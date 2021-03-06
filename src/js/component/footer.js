import React from "react";
import PropTypes from "prop-types";

export function Footer(props) {
	return (
		<footer className="py-5 bg-dark">
			<div className="container">
				<p className="m-0 text-center text-white">{props.text}</p>
			</div>
		</footer>
	);
}

Footer.propTypes = {
	text: PropTypes.string
};
