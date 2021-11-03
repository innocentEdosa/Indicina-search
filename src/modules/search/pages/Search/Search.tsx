import SearchPageSwitcher from 'modules/search/pages/SearchPageSwitcher';
import useUrlQueryString from 'hooks/useUrlQueryString';

const Search = () => {
  const { getUrlSearchParamValue } = useUrlQueryString();
  const searchTerm = getUrlSearchParamValue('q');

  return <SearchPageSwitcher hasSearchParams={!!searchTerm} />;
};

export default Search;
