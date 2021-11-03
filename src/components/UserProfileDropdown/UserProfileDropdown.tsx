import { useCallback, useRef } from 'react';
import clsx from 'clsx';
import ChevronDown from 'components/Vectors/ChevronDown';
import ButtonLink from 'components/ButtonLink';
import { Root } from 'lib/routes';
import styles from './userprofiledropdown.module.css';
import UserAvatar from 'components/UserAvatar';

const UserProfileDropdown = () => {
  const DropdownMenuEl = useRef<HTMLDivElement>(null!);
  const togglerEl = useRef<HTMLButtonElement>(null!);

  const showDropdownMenu = useCallback(() => {
    DropdownMenuEl.current.dataset.hidden = 'false';
    togglerEl.current.dataset.expanded = 'true';
  }, []);

  const hideDropdownMenu = useCallback(() => {
    DropdownMenuEl.current.dataset.hidden = 'true';
    togglerEl.current.dataset.expanded = 'false';
  }, []);

  const toggleDropdownMenu = useCallback(() => {
    DropdownMenuEl.current.dataset.hidden === 'true' ? showDropdownMenu() : hideDropdownMenu();
  }, []);

  return (
    <div className={styles.dropdownWrapper}>
      <div
        className={styles.userdropdown}
        onMouseLeave={hideDropdownMenu}
        onMouseEnter={showDropdownMenu}
        data-testid="user-dropdown-mouse-trigger"
      >
        <button
          data-testid="user-dropdown-button"
          onTouchEnd={toggleDropdownMenu}
          className={styles.dropdownButton}
          aria-label="open user dropdown"
          title="open user dropdown"
          type="button"
          tabIndex={-1}
          data-expanded="false"
          ref={togglerEl}
        >
          <UserAvatar />
          <ChevronDown className={styles.chevronIcon} />
        </button>
        <div data-testid="user-dropdown-menu" data-hidden="true" ref={DropdownMenuEl} className={styles.dropdownMenu}>
          <div className={clsx(styles.dropdownContentWrapper, styles['top'])}>
            <ButtonLink className={styles.logoutBtn} as="router" href={Root}>
              Logout
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDropdown;
