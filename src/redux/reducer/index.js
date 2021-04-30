import initialState from "./initialStatte";

function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case "ADD_CARDID": {
			return {
				...state,
				cardID: action.payload,
			};
		}
		case "ADD_NAME": {
			return {
				...state,
				name: action.payload,
			};
		}

		case "ADD_CELLPHONE": {
			return {
				...state,
				cellphone: action.payload,
			};
		}
		case "ADD_LICENSE_PLATE": {
			return {
				...state,
				licensePlate: action.payload,
			};
		}
		case "ADD_YEAR_CAR": {
			return {
				...state,
				yearCar: action.payload,
			};
		}
		case "ADD_BRAND": {
			return {
				...state,
				brand: action.payload,
			};
		}
		case "ADD_GAS": {
			return {
				...state,
				gas: action.payload,
			};
		}
		case "ADD_AMOUNT": {
			return {
				...state,
				amount: action.payload,
			};
		}
		case "ADD_COVERAGE": {
			return {
				...state,
				coverage: action.payload,
			};
		}
		default: {
			return state;
		}
	}
}

export default reducer;
