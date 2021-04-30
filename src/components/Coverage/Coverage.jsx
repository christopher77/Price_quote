import React from "react";
import chevron from "../../images/chevrot.png";
import circle_add from "../../images/circle_add.png";
import "./Coverage.scss";

const Coverage = ({ image, handleFunction, labelbutton, title }) => {
	return (
		<div>
			<div className="coverages__item">
				<img src={image} alt={title} />
				<span className="coverages__title">{title}</span>
				<img className="coverages__image" src={chevron} alt="desplegable" />
			</div>
			<div className="coverages__add" onClick={handleFunction}>
				<img src={circle_add} alt="add coverage" />
				<button className="coverages__button">{labelbutton}</button>
			</div>
			<hr />
		</div>
	);
};

export default Coverage;
