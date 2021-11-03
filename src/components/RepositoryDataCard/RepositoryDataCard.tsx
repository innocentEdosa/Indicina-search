import styles from './repositorydatacard.module.css';

const RepositoryDataCard = () => {
  return (
    <article className={styles.cardWrapper}>
      <div className={styles.repoDetails}>
        <h3 className={styles.repoName}>John Doe</h3>
        <span className={styles.repoLead}>Lorem ipsum dolor</span>
      </div>
      <p className={styles.description}>adfasfda asdfadsfadsf asfdadsfdasf asfdasfdsa</p>
    </article>
  );
};

export default RepositoryDataCard;
