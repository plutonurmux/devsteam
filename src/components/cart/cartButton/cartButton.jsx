import { BsCart4 } from 'react-icons/bs';
import { useRecoilState, useRecoilValue } from 'recoil';
import { openState } from '@/atoms/open';
import { cartState } from '@/atoms/cart';
import styles from './cartButton.module.css';
import CartMenu from '@/components/cart/cartMenu/cartMenu';

export default function CartButton() {
  const [open, setOpen] = useRecoilState(openState);
  const cart = useRecoilValue(cartState);
  return (
    <div className={`${styles.cartcontainer} ${open && styles.clicked}`}>
      <BsCart4 size={40} onClick={() => setOpen(!open)} />
      {cart.length == 0 || <div className={styles.number}>{cart.length}</div>}
      {open && <CartMenu />}
    </div>
  );
}