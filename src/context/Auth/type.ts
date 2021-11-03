export type GithubSuccessResponse = {
  code: string;
};

export interface AuthProps {
  children: React.ReactChild | React.ReactChild[];
}

export interface AuthContextType {
  getUserToken: (params: GithubSuccessResponse) => void;
  onLoginError: (response: any) => void;
  isAuthenticated: boolean;
  token: string | null;
  logout: () => void;
}
