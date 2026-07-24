import { createContext, useContext } from "react";

const TourContext = createContext();

export default TourContext;

export function useTour() {
    return useContext(TourContext);
}