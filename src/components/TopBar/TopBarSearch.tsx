import { useMemo } from 'react';
import debounce from 'lodash/debounce';
import useUrlQueryString from 'hooks/useUrlQueryString';
import SearchInput from 'components/SearchInput';
import styles from './topbar.module.css';

const TopBarSearch = () => {
  const { addUrlSearchParam } = useUrlQueryString();

  const debouncedSearchHandler = useMemo(
    () =>
      debounce(searchTerm => {
        if (searchTerm) {
          addUrlSearchParam('q', searchTerm);
        }
      }, 1000),
    [addUrlSearchParam],
  );

  return (
    <SearchInput
      placeholder="Search"
      inputClassName={styles.input}
      wrapperClassName={styles.inputWrapper}
      onChange={debouncedSearchHandler}
    />
  );
};

export default TopBarSearch;
