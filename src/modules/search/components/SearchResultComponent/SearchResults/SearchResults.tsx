import styles from './searchresults.module.css';
// import UserDataCard from 'components/UserDataCard';
import RepositoryDataCard from 'components/RepositoryDataCard';

const SearchResults = () => {
  const renderDataCards = () => {
    return (
      <>
        {[1, 2, 3, 4, 5].map(() => (
          <RepositoryDataCard />
        ))}
      </>
    );
  };

  return (
    <div aria-label="Search results">
      <h3 className={styles.searchTotal}>2,849 users</h3>
      <div className={styles.searchResults}>{renderDataCards()}</div>
    </div>
  );
};

export default SearchResults;
