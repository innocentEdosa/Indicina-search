import numeral from 'numeral';
import { format } from 'timeago.js';
import { Repository } from 'modules/search/models/search';

import styles from './repositorydatacard.module.css';

const RepositoryDataCard = ({
  nameWithOwner,
  url,
  description,
  stargazerCount,
  updatedAt,
  languages,
  licenseInfo,
}: Repository) => {
  return (
    <article className={styles.cardWrapper}>
      <div className={styles.repoDetails}>
        <a href={url} target="_blank" rel="noreferrer" className={styles.repoName}>
          {nameWithOwner}
        </a>
        <span className={styles.repoLead}>{description}</span>
      </div>
      <p className={styles.description}>
        {numeral(stargazerCount).format('0 a')} Stars | {languages?.edges?.[0]?.node?.name || 'N/A'} |{' '}
        {licenseInfo?.name || 'N/A'} | Updated {format(new Date(updatedAt || ''))}
      </p>
    </article>
  );
};

export default RepositoryDataCard;
