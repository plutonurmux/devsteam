import Image from 'next/image';
import styles from './cartOption.module.css';

export default function CartOption({ image, title, price, onRemove }) {
  const formattedPrice = price.toFixed(2).replaceAll(".", ",");
  return (
    <div className={styles.option}>
      <Image className={styles.image} src={`/products/${image}`} alt={`Jogo ${title}`} width={62} height={74} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <h3 className={styles.price}>R${formattedPrice}</h3>
        <p className={styles.remove} onClick={onRemove}>Remover</p>
      </div>
    </div>
  );
}