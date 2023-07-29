import Head from 'next/head';
import { useRecoilState, useRecoilValue } from 'recoil';

import { cartState } from '@/atoms/cart';
import { searchState } from '@/atoms/search';
import { openState } from '@/atoms/open';

import styles from '@/styles/index.module.css';

import Navbar from '@/components/navbar/navbar';
import Container from '@/components/container/container'
import Subtitle from '@/components/tipography/subtitle/subtitle';
import SaleCard from '@/components/cards/saleCard/saleCard';
import GameCard from '@/components/cards/gameCard/gameCard';

import { saleGames, otherGames } from '@/datas/games';

export default function Home() {
  const [cart, setCart] = useRecoilState(cartState);
  const search = useRecoilValue(searchState);
  const open = useRecoilValue(openState);

  const handleAddProduct = (info) => {
    (cart.some(e => e.name === info.name)) || setCart([...cart, info]);
  }

  const filterSaleGames = () => {
    const filterGames = saleGames.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));
    if(filterGames.length === 0) return (<p>Jogo não encontrado</p>);
    return (
      filterGames.map(e => {
        console.log(e.name);
        return (
          <SaleCard 
            name={e.name} 
            percent={e.discount} 
            price={e.price} 
            onAdd={() => handleAddProduct({ 
              name: e.name,
              price: e.price - (e.price * e.discount / 100), 
              image: e.name.toLowerCase().replaceAll(" ", "-") + '.jpg'
            })} 
          />
        );
      })
    );
  }

  const filterOtherGames = () => {
    const filterGames = otherGames.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));
    if(filterGames.length === 0) return (<p>Jogo não encontrado</p>);
    return (
      filterGames.map(e => {
        console.log(e.name);
        return (
          <GameCard 
            name={e.name} 
            src={e.src} 
            categories={e.categories}
            price={e.price} 
            onAdd={() => handleAddProduct({ 
              name: e.name,
              price: e.price, 
              image: "cover-" + e.src
            })} 
          />
        );
      })
    );
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="author" content="Lucas dos Santos Gomes" />
        <meta name="keywords" content="steam, games, e-commerce, ecommerce, jogos" />
        <link rel="icon" href="/favicon.ico" />
        <title>DevSteam: A sua loja online de games</title>
      </Head>
      <div>
        <Navbar />
        <Container cartOpen={open}>
          <section className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <ul className={styles.salecontainer}>
              {(search.length === 0) && saleGames.map(e => {
                return (
                  <SaleCard 
                    name={e.name} 
                    percent={e.discount} 
                    price={e.price} 
                    onAdd={() => handleAddProduct({ 
                      name: e.name,
                      price: e.price - (e.price * e.discount / 100), 
                      image: e.name.toLowerCase().replaceAll(" ", "-") + '.jpg'
                    })} 
                  />
                );
              })}
              {(search.length === 0 || filterSaleGames())}
            </ul>
          </section>
          <section className={styles.session}>
            <Subtitle>Outros jogos</Subtitle>
            <ul className={styles.gamecontainer}>
              {(search.length === 0) && otherGames.map(e => {
                return (
                  <GameCard 
                    name={e.name} 
                    src={e.src} 
                    categories={e.categories}
                    price={e.price} 
                    onAdd={() => handleAddProduct({ 
                      name: e.name,
                      price: e.price, 
                      image: "cover-" + e.src
                    })} 
                  />
                );
              })}
              {(search.length === 0 || filterOtherGames())}
            </ul>
          </section>
        </Container>
      </div>
    </>
  );
}
