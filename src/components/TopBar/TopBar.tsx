import Logo from 'components/Vectors/Logo';
import UserProfileDropdown from 'components/UserProfileDropdown';
import SearchInput from 'components/SearchInput';
import styles from './topbar.module.css';

const TopBar = () => {
  return (
    <nav className={styles.topbar}>
      <div className={styles.navContent}>
        <Logo className={styles.logo} />
        <SearchInput
          placeholder="Search"
          inputClassName={styles.input}
          wrapperClassName={styles.inputWrapper}
          onChange={console.log}
        />
        <UserProfileDropdown />
      </div>
    </nav>
  );
};

export default TopBar;
