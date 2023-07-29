import Image from 'next/image';
import styles from './gameCard.module.css';
import Button from '@/components/forms/button/button';

export default function GameCard({ onAdd, ...props }) {
  const { name, src, categories, price } = {...props};
  const getCategories = categories.join(", ");
  const formattedPrice = `R$ ${price.toFixed(2).replaceAll(".", ",")}`;
  return (
    <li className={styles.gamecard}>
      <Image className={styles.image} src={`/products/${src}`} alt={`Capa do jogo ${name}`} width={300} height={145} />
      <div className={styles.info}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.category}>{getCategories.replace(getCategories[0], getCategories[0].toUpperCase())}</p>
        <div className={styles.pricing}>
          <h2 className={styles.price}>{formattedPrice}</h2>
          <div className={styles.buttoncontainer}>
            <Button onClick={onAdd} fullWidth>Adicionar ao carrinho</Button>
          </div>
        </div>
      </div>
    </li>
  );
}

GameCard.defaultProps = {
  name: "Counter Strike: Global Offensive",
  src: "counter-strike.jpg",
  categories: [
    "ação",
    "estratégia",
    "multijogador"
  ],
  price: 76.49
}