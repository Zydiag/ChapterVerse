import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart, useTitle } from '../../hooks'

export const CartPage = () => {
  const {cartList} = useCart();
  useTitle(`My Cart (${cartList.length})`);
  return (
    <main>          
      {cartList.length ? <CartList /> : <CartEmpty />}
    </main>
  )
}
