import { Link } from 'umi';
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
          users.map((user) => (<li key={user.id}>
            <Link to={`/users/${user.name}`}>{user.name}</Link>
          </li>))
        }
      </ul>
    </div>
  );
}
