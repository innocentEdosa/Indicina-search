import LoginComponent from 'modules/auth/LoginComponent';
import useAuthContext from 'hooks/useAuthContext';

const Login = () => {
  const { getUserToken, onLoginError } = useAuthContext();

  return <LoginComponent onFailure={onLoginError} onSuccess={getUserToken} />;
};

export default Login;
