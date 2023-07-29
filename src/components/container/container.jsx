import styles from './container.module.css';

export default function Container({ cartOpen, children }) {
  return (
    <main className={`${styles.container} ${cartOpen && styles.dark}`}>
      {children}
    </main>
  );
}