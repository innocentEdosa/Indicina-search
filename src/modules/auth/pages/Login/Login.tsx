import LoginComponent from 'modules/auth/components/LoginComponent';
import useAuthContext from 'hooks/useAuthContext';
import { checkAuth } from 'hoc/checkAuth';

const Login = () => {
  const { getUserToken, onLoginError } = useAuthContext();

  return <LoginComponent scope="read:user" onFailure={onLoginError} onSuccess={getUserToken} />;
};

export default checkAuth(Login);
