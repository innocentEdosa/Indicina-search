import styles from './userdatacard.module.css';

const UserDataCard = () => {
  return (
    <article className={styles.cardWrapper}>
      <div className={styles.userDetails}>
        <h3 className={styles.userName}>John Doe</h3>
        <span className={styles.userLead}>Lorem ipsum dolor</span>
      </div>
      <p className={styles.description}>adfasfda asdfadsfadsf asfdadsfdasf asfdasfdsa</p>
    </article>
  );
};

export default UserDataCard;
