import { useRecoilState } from 'recoil';
import { searchState } from '@/atoms/search';
import styles from './navbar.module.css';
import Logo from '@/components/logo/logo';
import Input from '@/components/forms/input/input';
import CartButton from '@/components/cart/cartButton/cartButton';

export default function Navbar() {
  const [search, setSearch] = useRecoilState(searchState);
  return (
    <header className={styles.navbar}>
      <Logo />
      <div className={styles.search}>
        <Input type="text" placeholder="Buscar" onChange={e => setSearch(e.target.value)} value={search} fullWidth />
      </div>
      <CartButton />
    </header>
  );
}