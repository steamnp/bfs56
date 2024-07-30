import styles from "./childmodule.css";

function Child({ test }) {
  return <div className={styles.container}>{test}</div>;
}

export default Child;
