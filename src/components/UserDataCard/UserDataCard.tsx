import { User } from 'modules/search/models/search';
import styles from './userdatacard.module.css';

const UserDataCard = ({ name, bio, login }: User) => {
  return (
    <article className={styles.cardWrapper}>
      <div className={styles.userDetails}>
        <h3 className={styles.userName}>{name || 'N/A'}</h3>
        <span className={styles.userLead}>{login}</span>
      </div>
      <p className={styles.description}>{bio}</p>
    </article>
  );
};

export default UserDataCard;
