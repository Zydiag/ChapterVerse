import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const useCart = () => {
  const value = useContext(CartContext);
  return value;
}