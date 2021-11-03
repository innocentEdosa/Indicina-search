import TopBar from 'components/TopBar';
import SearchResultComponent from 'modules/search/components/SearchResultComponent';

const SearchResult = () => {
  return (
    <section aria-label="Search result">
      <TopBar />
      <SearchResultComponent />
    </section>
  );
};

export default SearchResult;
