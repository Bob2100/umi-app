import React from 'react';
import styles from './[id].css';

export default (props) => {
  return (
    <div>
      <h1 className={styles.title}>Page User</h1>
      <p>{props.match.params.id}</p>
    </div>
  );
}