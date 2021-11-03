import SearchComponent from 'modules/search/components/SearchComponent';
import UserProfileDropdown from 'components/UserProfileDropdown';
import styles from './search.module.css';

const Search = () => {
  return (
    <section>
      <nav className={styles.navSection}>
        <div className={styles.navWrapper}>
          <UserProfileDropdown />
        </div>
      </nav>
      <div className={styles.formSection}>
        <SearchComponent />
      </div>
    </section>
  );
};

export default Search;
