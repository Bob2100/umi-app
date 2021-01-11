import { history } from 'umi';
import styles from './index.css';

export default () => {
  const users = [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Jack' },
    { id: 3, name: 'Rose' }
  ];

  return (
    <div>
      <h1 className={styles.title}>Page users/index</h1>
      <ul>
        {
          users.map((user) => (<li key={user.id} onClick={() => history.push(`/users/${user.id}`)}>{user.name}</li>))
        }
      </ul>
    </div>
  );
}
