import { useEffect } from 'react';
import { requireAuth } from 'hoc/requireAuth';
import useAuthContext from 'hooks/useAuthContext';
const Logout = () => {
  const { logout } = useAuthContext();

  useEffect(() => {
    logout();
  }, []);

  return <div>this is the logout page</div>;
};

export default requireAuth(Logout);
