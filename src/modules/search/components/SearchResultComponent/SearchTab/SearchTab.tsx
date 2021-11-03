import numeral from 'numeral';
import useUrlQueryString from 'hooks/useUrlQueryString';
import { useSearchData } from 'modules/search/utils/searchContext';
import { SEARCH_OPTIONS_ENUM } from 'modules/search/models/search';
import styles from './searchtab.module.css';

type SearchTabItemProps = { label: string; value: string; activeType: string; count: number };

const searchTabOptions = [
  { label: 'Repository', value: SEARCH_OPTIONS_ENUM.REPOSITORY },
  { label: 'Users', value: SEARCH_OPTIONS_ENUM.USERS },
];

const SearchTabItem = ({ label, value, activeType, count }: SearchTabItemProps) => {
  const { addUrlSearchParam } = useUrlQueryString();

  const handleTabClick = () => addUrlSearchParam('type', value);

  return (
    <li data-active={activeType === value} className={styles.searchTabItem}>
      <button onClick={handleTabClick} className={styles.searchTabButton}>
        <h3 className={styles.tabLabel}>{label}</h3>
        {<span className={styles.tabCount}>{numeral(count).format('0 a')}</span>}
      </button>
    </li>
  );
};

const SearchTab = () => {
  const searchData = useSearchData();

  const dataCount: Record<string, number> = {
    [SEARCH_OPTIONS_ENUM.USERS]: searchData?.data?.users?.userCount,
    [SEARCH_OPTIONS_ENUM.REPOSITORY]: searchData?.data?.repositories?.repositoryCount,
  };

  return (
    <aside className={styles.aside}>
      <ul>
        {searchTabOptions.map(option => (
          <SearchTabItem
            count={dataCount[option.value]}
            activeType={searchData?.type || SEARCH_OPTIONS_ENUM.REPOSITORY}
            key={option.label}
            {...option}
          />
        ))}
      </ul>
    </aside>
  );
};

export default SearchTab;
