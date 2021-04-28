import React from "react";
import "./Header.scss";
import logo from "../../images/Logo_rimac.png";
import phone from "../../images/ic_phone.png";

const Header = () => {
	return (
		<div className="header">
			<img src={logo} alt="" />
			<div className="header__info">
				<div className="header__info--ask">¿Tienes alguna duda?</div>
				<div className="header__info--number">
					<img src={phone} alt="phone" />
					<div className="header__info--number-value">(01)411 6001</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
