import React from 'react';
import styles from './[id].css';

export default (props) => {
  return (
    <div>
      <h1 className={styles.title}>Page User Id</h1>
      {props.match.params.id}
    </div>
  );
}