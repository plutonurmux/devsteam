import Image from 'next/image';
import styles from './saleCard.module.css';
import Button from '@/components/forms/button/button';

export default function SaleCard({name, percent, price, onAdd}) {
  const src = name.toLowerCase().replaceAll(" ", "-");
  const formattedPrice = price.toFixed(2).replaceAll(".", ",");
  const formattedFinalPrice = (price - (price * percent / 100)).toFixed(2).replaceAll(".", ",");

  return (
    <li className={styles.salecard}>
      <Image src={`/products/${src}.jpg`} alt={`Imagem do jogo ${name}`} width={250} height={300} />
      <div className={styles.info}>
        <h3 className={styles.title}>Oferta exclusiva</h3>
        <div className={styles.pricecard}>
          <div className={styles.percent}>-{percent}%</div>
          <div className={styles.price}>
            <p className={styles.fullprice}>R${formattedPrice}</p>
            <h4 className={styles.discountprice}>R${formattedFinalPrice}</h4>
          </div>
        </div>
        <Button onClick={onAdd} fullWidth>Adicionar ao carrinho</Button>
      </div>
    </li>
  );
}

SaleCard.defaultProps = {
  name: "league-of-legends",
  percent: 20,
  price: 99.9
}