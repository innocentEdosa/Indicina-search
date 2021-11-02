import { useContext } from 'react';
import { AuthContext } from 'context/Auth/Auth';

export default function useAuthContext() {
  const authState = useContext(AuthContext);
  if (authState === undefined) throw new Error('useAuthContext used outside AuthProvider');

  return authState;
}
