import "./SimpleInput.scss";
import React from "react";

function SimpleInput(props) {
	const setProperty = props.setProperty;
	const [realValue, setRealValue] = React.useState("");

	function onChangeInput(event) {
		const inputValue = event.target.value;
		setRealValue(inputValue.replace(/\D/g, ""));
		if (inputValue.match(/[0-9]{8,9}/)) {
			setProperty(inputValue);
		}
	}
	
	function onChangeInput2(event) {
		setProperty(event.target.value);
	}

	return props.complex ? (
		<div className="identification">
			<select className="identification__select" name="document" id="document">
				<option value="dni">DNI</option>
				<option value="passport">PASSPORT</option>
				<option value="other">OTHER</option>
			</select>
			<hr />
			<div className="identification__group">
				<input
					className="identification__input"
					maxLength={props.max}
					type="text"
					onChange={onChangeInput}
					autoFocus={true}
					value={realValue}
					required
				></input>
				<label className="identification__label">{props.nombre}</label>
			</div>
		</div>
	) : (
		<div className="wrapper">
			<div className="wrapper__group">
				{props.tipo === "number" ? (
					<input
						className="wrapper__input"
						maxLength={props.max}
						onChange={onChangeInput}
						value={realValue}
						type="text"
						required
					/>
				) : (
					<input
						className="wrapper__input"
						maxLength={props.max}
						onChange={onChangeInput2}
						type="text"
						required
					/>
				)}
				<label className="wrapper__label">{props.nombre}</label>
			</div>
		</div>
	);
}

export default SimpleInput;
