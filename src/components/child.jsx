//rfce shortcut for creating functional component

import styles from "../styles/child.module.css";

function child({ test }) {
  return <div className="text-orange-950">child: {test}</div>;
}

export default child;
