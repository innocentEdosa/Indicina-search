import LoginGithub from 'react-login-github';
import Button from 'components/Button';
import { GithubSuccessResponse } from 'context/Auth/type';
import styles from './login.module.css';

type LoginComponentProps = {
  onSuccess: (response: GithubSuccessResponse) => void;
  onFailure: (response: Error) => void;
  scope?: string;
};

const LoginComponent = ({ onSuccess, onFailure, scope }: LoginComponentProps) => {
  return (
    <section aria-label="Login" className={styles.loginWrapper}>
      <LoginGithub scope={scope} onSuccess={onSuccess} onFailure={onFailure} clientId="4f262cc9e20d3043da02">
        <Button>Login to Github</Button>
      </LoginGithub>
    </section>
  );
};

export default LoginComponent;
