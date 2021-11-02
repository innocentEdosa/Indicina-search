import { useMutation } from 'react-query';
import { Code } from 'modules/auth/models/accessToken';
import getAccessToken from 'modules/auth/service/accessToken';
import ResponseError from 'lib/utils/ResponseError';

export const QUERY_KEY = 'access_token';

export default function useAccessTokens() {
  return useMutation<any, ResponseError, Code>(QUERY_KEY, getAccessToken);
}
