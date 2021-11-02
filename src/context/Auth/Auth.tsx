import { createContext, useState, useEffect } from 'react';
import ApiInstance from 'lib/api/ApiInstance';

import { GithubSuccessResponse, AuthProps, AuthContextType } from './type';
import useAccessToken from 'modules/auth/hooks/mutations/useAccessToken';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const tokenKey = 'github-search-access-token';

const AuthContextProvider = (props: AuthProps) => {
  const [authState, setAuthState] = useState({
    token: '',
    isAuthenticated: false,
  });

  const { mutate: fetchToken } = useAccessToken();

  const getUserToken = async ({ code }: GithubSuccessResponse) => {
    fetchToken(code, {
      onSuccess: (data: string) => {
        setAuthState(prev => ({
          ...prev,
          token: data,
          isAuthenticated: true,
        }));
        ApiInstance.setAuth(data);
        localStorage.setItem(tokenKey, data);
      },
    });
  };

  const onLoginError = (response: Error) => console.log(response);

  useEffect(() => {
    const token = localStorage.getItem(tokenKey);
    if (token) {
      setAuthState({
        token,
        isAuthenticated: true,
      });
      ApiInstance.setAuth(token);
    }
  }, []);

  const value = {
    getUserToken,
    onLoginError,
    token: authState.token,
    isAuthenticated: authState.isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};

export default AuthContextProvider;
