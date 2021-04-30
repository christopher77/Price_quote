import { navigate } from "@reach/router";
import "./Success.scss";
import Header from "../../components/Header/Header";

function Success() {
	return (
		<div className="success__container ">
			<Header />
			<div className="success__left"></div>
			<div className="success__image" />
			<div className="message">
				<div className="message__title">¡Te damos la bienvenida!</div>
				<div className="message__subtitle">
					Cuenta con nosotros para proteger tu vehiculo
				</div>
				<p className="message__content">
					Enviaremos la confirmación de compra de tu Plan Vehicular Tracking a
					tu correo:<br></br> joel.sanchez@gmail.com
				</p>

				<button className="button" onClick={() => navigate("/")}>
					cómo usar mi seguro
				</button>
			</div>
		</div>
	);
}

export default Success;
