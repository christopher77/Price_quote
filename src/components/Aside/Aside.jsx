import React from "react";
import "./Aside.scss";

const Aside = (props) => {
	return (
		<div className="step">
			<div className="step__container">
				<div className="step__wrapper">
					<div className={props.step === 1 ? "step__selected" : "step__number"}>
						1
					</div>
					<div
						className={
							props.step === 1
								? "step__description--selected"
								: "step__description"
						}
					>
						Datos del auto
					</div>
					<div className="divider"></div>
				</div>
				<div className="step__wrapper">
					<div className={props.step === 2 ? "step__selected" : "step__number"}>
						2
					</div>
					<div
						className={
							props.step === 2
								? "step__description--selected"
								: "step__description"
						}
					>
						Arma tu plan
					</div>
					<div className="divider"></div>
				</div>
			</div>
		</div>
	);
};

export default Aside;
