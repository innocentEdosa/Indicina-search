import useAuthContext from 'hooks/useAuthContext';
import { Redirect } from 'react-router-dom';

export function checkAuth(Component: React.FC) {
  return (props: any) => {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Redirect to='/search' /> : <Component {...props} />;
  };
}
