import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card h-100">
				<img className="card-img-top" src={`${props.imgsrc}`} alt />
				<div className="card-body">
					<h4 className="card-title">{props.tittle}</h4>
					<p className="card-text">{props.text}</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						{props.btnLabel}
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	tittle: PropTypes.string,
	text: PropTypes.string,
	btnLabel: PropTypes.string,
	imgsrc: PropTypes.string
};
