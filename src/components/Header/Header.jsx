import React from "react";
import "./Header.scss";
import logo from "../../images/Logo_rimac.png";
import phone from "../../images/ic_phone.png";

const Header = (props) => {
	return (
		<div className={props.detail === false ? "header__home" : "header"}>
			<img src={logo} alt="logo" />
			<div className="header__info">
				<div className="header__question">¿Tienes alguna duda?</div>
				<div className="header__number">
					<img src={phone} alt="phone" />
					<div className="header__number--value">(01)411 6001</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
