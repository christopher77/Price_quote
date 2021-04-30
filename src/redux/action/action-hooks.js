import React from "react";
import { useDispatch } from "react-redux";

import {
	reset,
	addAmount,
	addBrand,
	addCellphone,
	addCardID,
	addGas,
	addLicensePlate,
	addYearCar,
	addName,
	addCoverage,
} from "./actions";

export function useAddAmount() {
	const dispatch = useDispatch();
	return React.useCallback((amount) => dispatch(addAmount(amount)), [dispatch]);
}

export function useAddBrand() {
	const dispatch = useDispatch();
	return React.useCallback((brand) => dispatch(addBrand(brand)), [dispatch]);
}

export function useAddCellphone() {
	const dispatch = useDispatch();
	return React.useCallback((cellphone) => dispatch(addCellphone(cellphone)), [
		dispatch,
	]);
}

export function useAddCardID() {
	const dispatch = useDispatch();
	return React.useCallback((cardid) => dispatch(addCardID(cardid)), [dispatch]);
}

export function useAddGas() {
	const dispatch = useDispatch();
	return React.useCallback((gas) => dispatch(addGas(gas)), [dispatch]);
}

export function useAddLicensePlate() {
	const dispatch = useDispatch();
	return React.useCallback(
		(licensePlate) => dispatch(addLicensePlate(licensePlate)),
		[dispatch]
	);
}

export function useAddYearCar() {
	const dispatch = useDispatch();
	return React.useCallback((yearCar) => dispatch(addYearCar(yearCar)), [
		dispatch,
	]);
}

export function useReset() {
	const dispatch = useDispatch();
	return React.useCallback(() => dispatch(reset()), [dispatch]);
}

export function useAddName() {
	const dispatch = useDispatch();
	return React.useCallback((name) => dispatch(addName(name)), [dispatch]);
}

export function useAddCoverage() {
	const dispatch = useDispatch();
	return React.useCallback((coverage) => dispatch(addCoverage(coverage)), [
		dispatch,
	]);
}
