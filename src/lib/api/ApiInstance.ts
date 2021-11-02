import Api from './Api';

const URL = process.env.REACT_APP_GITHUB_GRAPHQL_ENDPOINT;

if (!URL) throw new Error('missing api url');

export default new Api(URL);
