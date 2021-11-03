import SearchComponent from 'modules/search/components/SearchComponent';
import UserProfileDropdown from 'components/UserProfileDropdown';
import styles from './searchpage.module.css';

const SearchPage = () => {
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

export default SearchPage;
