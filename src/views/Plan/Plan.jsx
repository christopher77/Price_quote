import React from "react";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import "./Plan.scss";
import back from "../../images/icon_Back.png";
import shield from "../../images/shield.svg";
import check from "../../images/ic_check.png";
import {
	useLicensePlate,
	useBrand,
	useYearCar,
} from "../../redux/selectors/selectors";
import { navigate } from "@reach/router";
import robo from "../../images/icon_theft.svg";
import choque from "../../images/icon_damage.png";
import perdida from "../../images/icon_perdidatotal.svg";
import { useAddCoverage } from "../../redux/action/action-hooks";
import Coverage from "../../components/Coverage/Coverage";

const Plan = () => {
	const licensePlate = useLicensePlate();
	const brand = useBrand();
	const yearCar = useYearCar();

	const [coverageAmount, setCoverageAmount] = React.useState(20);

	const [divColor, setDivColor] = React.useState(1);
	const addCoverage = useAddCoverage();

	const propsRobbery = {
		title: "Llanta robada",
		image: robo,
		quantity: 15,
		setCoverageAmount: setCoverageAmount,
		coverageAmount: coverageAmount,
	};
	const propsCrush = {
		title: "Choque y/o pasarte la luz roja",
		image: choque,
		quantity: 20,
		setCoverageAmount: setCoverageAmount,
		coverageAmount: coverageAmount,
	};
	const propsAccident = {
		title: "Atropello en la vía Evitamiento",
		image: perdida,
		quantity: 50,
		setCoverageAmount: setCoverageAmount,
		coverageAmount: coverageAmount,
	};

	function changeColor(index) {
		setDivColor(index);
	}

	function gotoSuccess() {
		addCoverage(coverageAmount);
		navigate("/success");
	}

	return (
		<div className="plan__container">
			<Aside step={2} />
			<Header />
			<div className="plan">
				<div className="plan__back" onClick={() => navigate("/auto")}>
					<img src={back} alt="back" className="auto__back--image" />
					<span>volver</span>
				</div>
				<div className="plan__title">
					<div className="plan__title--main">Mira las coberturas</div>
					<div className="plan__comment">
						Conoce las coberturas para su plan
					</div>
				</div>

				<div className="details">
					<div className="details__table">
						<div className="details__placa">Placa {licensePlate}</div>
						<div className="details__model">
							{brand} {yearCar}
						</div>
						<a href="####" className="details__link">
							editar
						</a>
					</div>
					<div className="details__image"></div>
				</div>

				<div className="plan__coverage">
					<div className="plan__subtitle">Agrega o quita coberturas</div>
				</div>
				<div className="plan__options">
					<div
						className={divColor === 1 ? "plan__item--selected" : "plan__item"}
						onClick={() => changeColor(1)}
					>
						protege a tu auto
					</div>
					<div
						className={divColor === 2 ? "plan__item--selected" : "plan__item"}
						onClick={() => changeColor(2)}
					>
						protege a los que te rodean
					</div>
					<div
						className={divColor === 3 ? "plan__item--selected" : "plan__item"}
						onClick={() => changeColor(3)}
					>
						mejora tu plan
					</div>
				</div>
				{/* <hr /> */}
				<div className="coverages">
					<Coverage {...propsRobbery} />
					<Coverage {...propsCrush} />
					<Coverage {...propsAccident} />
				</div>
			</div>

			<div className="right">
				<div className="right__price">
					<div>
						<div className="right__price--value">${coverageAmount}.00</div>
						<span>mensuales</span>
					</div>
					<img src={shield} alt="shield" />
				</div>
				<hr />
				<div className="right__list">
					El precio incluye:
					<ul className="right__title">
						<li className="right__item">
							<img src={check} alt="check" className="right__item--icon" />
							Llanta de repuesto
						</li>
						<li className="right__item">
							<img src={check} alt="check" className="right__item--icon" />
							analisis de motor
						</li>
						<li className="right__item">
							<img src={check} alt="check" className="right__item--icon" />
							Aros gratis
						</li>
					</ul>
				</div>
				<button className="right__button" onClick={gotoSuccess}>
					lo quiero
				</button>
			</div>
		</div>
	);
};

export default Plan;
