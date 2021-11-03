import withSearchParams from 'hoc/withSearchParams';
import SearchResult from 'modules/search/pages/SearchResult';
import SearchPage from 'modules/search/pages/SearchPage';

export default withSearchParams(SearchPage, SearchResult);
