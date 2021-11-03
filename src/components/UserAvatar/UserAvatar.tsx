import styles from './useravatar.module.css';

const UserAvatar = () => {
  return (
    <aside className={styles.avatar}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          alt="profile"
          src="https://images.pexels.com/photos/9938497/pexels-photo-9938497.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
      </div>
      <h3 className={styles.userName}>John Doe</h3>
    </aside>
  );
};

export default UserAvatar;
