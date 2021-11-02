import useAuthContext from 'hooks/useAuthContext';
import { Redirect } from 'react-router-dom';
import { Root } from 'lib/routes';

export function requireAuth(Component: React.FC) {
  return (props: any) => {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Component {...props} /> : <Redirect to={Root} />;
  };
}
