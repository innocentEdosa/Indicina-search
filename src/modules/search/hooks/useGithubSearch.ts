import { useQuery } from 'react-query';
import getSearchResult from 'modules/search/service/search';
import { SearchParams } from 'modules/search/models/search';

export const QUERY_KEY = 'github-search';

export default function useGithubSearch(params: SearchParams) {
  return useQuery([QUERY_KEY, params], getSearchResult(params));
}
