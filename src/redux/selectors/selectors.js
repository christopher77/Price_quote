import { useSelector, shallowEqual } from "react-redux";

function useName() {
	return useSelector((state) => state.name, shallowEqual);
}

function useLicensePlate() {
	return useSelector((state) => state.licensePlate, shallowEqual);
}
function useBrand() {
	return useSelector((state) => state.brand, shallowEqual);
}

function useYearCar() {
	return useSelector((state) => state.yearCar, shallowEqual);
}

export { useName, useLicensePlate, useBrand, useYearCar };
