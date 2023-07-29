import styles from './input.module.css';

export default function Input({ fullWidth, ...props }) {
  return (
    <input className={`${styles.input} ${fullWidth && styles.fullwidth}`} {...props} />
  );
}