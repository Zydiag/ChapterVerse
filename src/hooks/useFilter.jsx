import { useContext } from "react";
import { FilterContext } from "../context";

export const useFilter = () => {

  const value = useContext(FilterContext);
  return value;
}