import styles from '../styles/child.module.css'

function Child({ test }) {
  return <div className={styles.box}>{test}</div>
}

export default Child

// rfce -> React Function Component Export
