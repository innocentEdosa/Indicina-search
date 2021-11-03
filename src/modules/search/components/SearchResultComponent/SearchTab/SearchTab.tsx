import styles from './searchtab.module.css';
import useUrlQueryString from 'hooks/useUrlQueryString';

const searchTabOptions = [
  { label: 'Repository', value: 'repository' },
  { label: 'Users', value: 'users' },
];

const SearchTabItem = ({ label, value }: { label: string; value: string }) => {
  const { addUrlSearchParam } = useUrlQueryString();

  const handleTabClick = () => addUrlSearchParam('type', value);

  return (
    <li className={styles.searchTabItem}>
      <button onClick={handleTabClick} className={styles.searchTabButton}>
        <h3 className={styles.tabLabel}>{label}</h3>
        <span className={styles.tabCount}>456k</span>
      </button>
    </li>
  );
};

const SearchTab = () => {
  return (
    <aside className={styles.aside}>
      <ul>
        {searchTabOptions.map(option => (
          <SearchTabItem key={option.label} {...option} />
        ))}
      </ul>
    </aside>
  );
};

export default SearchTab;
