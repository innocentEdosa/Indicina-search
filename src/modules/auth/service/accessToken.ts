import Api from 'lib/api/ApiInstance';
import { TokenRequestValue, TokenResponse, Code } from 'modules/auth/models/accessToken';

const path = process.env.REACT_APP_ACCESS_TOKEN_ENDPOINT || '';

function getAccessToken(code: Code) {
  const transformRes = (data: TokenResponse) => data.data.access_token as string;
  return Api.fetchPost<TokenRequestValue, TokenResponse>(path, { code }, {}, transformRes);
}

export default getAccessToken;
