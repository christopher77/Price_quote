import React from "react";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import "./Auto.scss";
import car from "../../images/icon_car.svg";
import back from "../../images/icon_Back.png";
import { navigate } from "@reach/router";
import { useName } from "../../redux/selectors/selectors";
import {
	useAddYearCar,
	useAddBrand,
	useAddGas,
	useAddAmount,
} from "../../redux/action/action-hooks";
import add from "../../images/add.png";
import remove from "../../images/remove.png";
import Modal from "../../components/ui/modal";
import Combo from "../../components/Combo/Combo";

const Auto = () => {
	const years = [2017, 2018, 2019, 2020, 2021];
	const brands = ["Wolkswagen", "Toyota", "Mercedes", "Ferrari"];
	const addYearCar = useAddYearCar();
	const addBrand = useAddBrand();
	const addGas = useAddGas();
	const addAmount = useAddAmount();

	const name = useName();
	const [amount, setAmount] = React.useState(14300);
	const [showModal, setShowModal] = React.useState(false);
	const [brand, setBrand] = React.useState("Wolkswagen");
	const [year, setYear] = React.useState("2017");

	const propsBrand = {
		array: brands,
		name: "brand",
		setProperty: setBrand,
	};

	const propsYear = {
		array: years,
		name: "year",
		setProperty: setYear,
	};

	function onChangeValue(event) {
		const gas = event.target.value === "si" ? true : false;
		addGas(gas);
	}

	function goPlan() {
		if (amount <= 16500 && amount >= 12500) {
			addYearCar(year);
			addBrand(brand);
			addAmount(amount);
			navigate("/plan");
		} else {
			openModal();
		}
	}
	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	function increaseAmount() {
		if (amount === 16500) {
			return;
		} else {
			setAmount(amount + 100);
		}
	}

	function decreaseAmount() {
		if (amount === 12500) {
			return;
		} else {
			setAmount(amount - 100);
		}
	}
	return (
		<div className="auto__container">
			<Header />
			<Aside step={1} />
			<div className="auto">
				<div className="auto__back" onClick={() => navigate("/")}>
					<img className="auto__back--image" src={back} alt="back" />
					<span>volver</span>
				</div>
				<div className="auto__title">
					¡Hola,
					<span className="auto__title--red"> {name}!</span>
					<p className="auto__simple">Completa los datos de tu auto</p>
				</div>
				<Combo {...propsYear} />
				<Combo {...propsBrand} />
				<div className="auto__gas">
					<div className="auto__question">¿Tu auto es a gas?</div>
					<div className="auto__radios" onChange={onChangeValue}>
						<div className="auto__option">
							<input
								className="auto__option--input"
								type="radio"
								name="gas"
								value="si"
							/>
							<span>Sí</span>
						</div>
						<div className="auto__option">
							<input
								className="auto__option--input"
								type="radio"
								name="gas"
								value="no"
							/>
							<span>No</span>
						</div>
					</div>
				</div>
				<hr />
				<div className="auto__secure">
					<div className="auto__secure--details">
						<span>Indica la suma asegurada</span>
						<span>Min $12,500 Max $16,500</span>
					</div>
					<div className="auto__secure--amount">
						<img src={remove} alt="remove" onClick={decreaseAmount} />$ {amount}
						<img src={add} alt="add" onClick={increaseAmount} />
					</div>
				</div>
				<button className="auto__button" onClick={goPlan}>
					continuar
				</button>
			</div>
			<div className="help">
				<div className="help__title">ayuda</div>
				<hr />
				<div className="help__content">
					¿No encuentras el modelo?
					<img src={car} alt="" />
				</div>
				<a className="help__link" href="####">
					click aqui
				</a>
			</div>

			{showModal && (
				<Modal>
					<h2 className="messageTitle">Monto Actual ${amount} no valido</h2>
					<h3 className="messageModal">
						Monto valido desde $12500 hasta $16500
					</h3>
					<button className="buttonConfirm" onClick={closeModal}>
						OK
					</button>
				</Modal>
			)}
		</div>
	);
};

export default Auto;
