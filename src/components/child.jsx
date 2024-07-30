//rfce shortcut for creating functional component

import styles from "../styles/child.module.css";

function child({ test }) {
  return <div className={styles.container}>child: {test}</div>;
}

export default child;
