import Api from 'lib/api/ApiInstance';
import { SEARCH_GITHUB_USERS_WITH_REPO_COUNT, SEARCH_GITHUB_REPO_WITH_USERS_COUNT } from 'modules/search/query/search';
import { SEARCH_OPTIONS_ENUM, SearchParams } from 'modules/search/models/search';

function getSearchResult(searchParams: SearchParams) {
  const transformRes = (data: any) => {
    const result: Record<string, unknown> = {};
    Object.keys(data).forEach(key => {
      const datum = { ...data[key] };
      delete datum.edges;

      result[key] = {
        ...datum,
        [key]: data[key].edges,
      };
    });

    return result;
  };

  const query = () =>
    searchParams?.type === SEARCH_OPTIONS_ENUM.USERS
      ? SEARCH_GITHUB_USERS_WITH_REPO_COUNT
      : SEARCH_GITHUB_REPO_WITH_USERS_COUNT;
  return () => Api.post(query(), searchParams, {}, transformRes);
}

export default getSearchResult;
