import { Link } from 'react-router-dom';
import { Search } from 'lib/routes';
import Logo from 'components/Vectors/Logo';
import UserProfileDropdown from 'components/UserProfileDropdown';
import TopBarSearch from './TopBarSearch';
import styles from './topbar.module.css';

const TopBar = () => {
  return (
    <nav className={styles.topbar}>
      <div className={styles.navContent}>
        <Link to={Search}>
          <Logo className={styles.logo} />
        </Link>
        <TopBarSearch />
        <UserProfileDropdown />
      </div>
    </nav>
  );
};

export default TopBar;
