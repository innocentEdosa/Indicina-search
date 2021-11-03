import TopBar from 'components/TopBar';
import SearchResultComponent from 'modules/search/components/SearchResultComponent';
import { SearchProvider } from 'modules/search/utils/searchContext';

const SearchResult = () => {
  return (
    <SearchProvider>
      <section aria-label="Search result">
        <TopBar />
        <SearchResultComponent />
      </section>
    </SearchProvider>
  );
};

export default SearchResult;
