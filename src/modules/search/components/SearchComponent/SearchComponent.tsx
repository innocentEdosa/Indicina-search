import SearchForm from 'modules/search/components/SearchForm';
import Logo from 'components/Vectors/Logo';
import styles from './searchcomponent.module.css';

const SearchComponent = () => {
  return (
    <div className={styles.searchWrapper}>
      <Logo className={styles.logo} />
      <SearchForm onSubmit={console.log} />
    </div>
  );
};

export default SearchComponent;
