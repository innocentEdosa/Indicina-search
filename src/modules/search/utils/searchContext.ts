import { searchDataContextFactory } from 'context/Search/Search';
import useSearch from '../hooks/useGithubSearch';

const { SearchContext, SearchProvider, useSearchData } = searchDataContextFactory(useSearch);

export { SearchContext, SearchProvider, useSearchData };
