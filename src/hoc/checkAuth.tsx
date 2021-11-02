import useAuthContext from 'hooks/useAuthContext';
import { Search } from 'lib/routes';
import { Redirect } from 'react-router-dom';

export function checkAuth(Component: React.FC) {
  return (props: any) => {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Redirect to={Search} /> : <Component {...props} />;
  };
}
