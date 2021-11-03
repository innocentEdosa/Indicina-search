import SearchTab from 'modules/search/components/SearchResultComponent/SearchTab';
import SearchResults from 'modules/search/components/SearchResultComponent/SearchResults';
import styles from './searchresultcomponent.module.css';

const SearchResultComponent = () => {
  return (
    <div className={styles.resultWrapper}>
      <SearchTab />
      <main className={styles.resultMain}>
        <SearchResults />
      </main>
    </div>
  );
};

export default SearchResultComponent;
