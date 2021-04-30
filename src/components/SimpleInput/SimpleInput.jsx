import "./SimpleInput.scss";
import React from "react";
import down from "../../images/chevrot.png";

function SimpleInput({ nombre, tipo, max, complex, setProperty }) {
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

	return complex ? (
		<div className="identification">
			<div className="identification__container">
				<select
					className="identification__select"
					name="document"
					id="document"
				>
					<option value="dni">DNI</option>
					<option value="passport">PASSPORT</option>
					<option value="other">OTHER</option>
				</select>
				<img className="identification__down" src={down} alt="down" />
			</div>
			<div className="identification__divisor"></div>
			<div className="identification__group">
				<input
					className="identification__input"
					maxLength={max}
					type="text"
					onChange={onChangeInput}
					autoFocus={true}
					value={realValue}
					required
				></input>
				<label className="identification__label">{nombre}</label>
			</div>
		</div>
	) : (
		<div className="wrapper">
			<div className="wrapper__group">
				{tipo === "number" ? (
					<input
						className="wrapper__input"
						maxLength={max}
						onChange={onChangeInput}
						value={realValue}
						type="text"
						required
					/>
				) : (
					<input
						className="wrapper__input"
						maxLength={max}
						onChange={onChangeInput2}
						type="text"
						required
					/>
				)}
				<label className="wrapper__label">{nombre}</label>
			</div>
		</div>
	);
}

export default SimpleInput;
