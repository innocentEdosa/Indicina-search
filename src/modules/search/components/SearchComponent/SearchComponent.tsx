import SearchForm from 'modules/search/components/SearchForm';
import useUrlQueryString from 'hooks/useUrlQueryString';
import Logo from 'components/Vectors/Logo';
import { SearchFormType } from '../SearchForm/SearchForm';
import styles from './searchcomponent.module.css';

const SearchComponent = () => {
  const { addUrlSearchParam } = useUrlQueryString();

  const submitSearchHandler = ({ search }: SearchFormType) => {
    addUrlSearchParam('q', search);
  };

  return (
    <div className={styles.searchWrapper}>
      <Logo className={styles.logo} />
      <SearchForm onSubmit={submitSearchHandler} />
    </div>
  );
};

export default SearchComponent;
