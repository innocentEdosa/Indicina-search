import SearchComponent from 'modules/search/components/SearchComponent';
import styles from './search.module.css';

const Search = () => {
  return (
    <section>
      <nav className={styles.navSection}>this is the top nav</nav>
      <div className={styles.formSection}>
        <SearchComponent />
      </div>
    </section>
  );
};

export default Search;
