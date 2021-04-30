import React from "react";
import chevron from "../../images/chevrot.png";
import "./Combo.scss";

const Combo = (props) => {
	function handleChange(event) {
		props.setProperty(event.target.value);
	}
	return (
		<div className="combo">
			<select
				className="combo__select"
				onChange={handleChange}
				name={props.name}
				id={props.name}
			>
				{props.array.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
			</select>
			<img src={chevron} alt="chevron" className="combo__chevron" />
		</div>
	);
};

export default Combo;
