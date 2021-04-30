function reset() {
	return {
		type: "RESET",
	};
}

function addCardID(cardid) {
	return {
		type: "ADD_CARDID",
		payload: cardid,
	};
}

function addCellphone(cellphone) {
	return {
		type: "ADD_CELLPHONE",
		payload: cellphone,
	};
}

function addLicensePlate(licensePlate) {
	return {
		type: "ADD_LICENSE_PLATE",
		payload: licensePlate,
	};
}

function addYearCar(yearCar) {
	return {
		type: "ADD_YEAR_CAR",
		payload: yearCar,
	};
}

function addBrand(brand) {
	return {
		type: "ADD_BRAND",
		payload: brand,
	};
}

function addGas(gas) {
	return {
		type: "ADD_GAS",
		payload: gas,
	};
}
function addAmount(amount) {
	return {
		type: "ADD_AMOUNT",
		payload: amount,
	};
}
function addName(name) {
	return {
		type: "ADD_NAME",
		payload: name,
	};
}
function addCoverage(coverage) {
	return {
		type: "ADD_COVERAGE",
		payload: coverage,
	};
}
export {
	reset,
	addCardID,
	addCellphone,
	addLicensePlate,
	addYearCar,
	addBrand,
	addGas,
	addAmount,
	addName,
	addCoverage,
};
