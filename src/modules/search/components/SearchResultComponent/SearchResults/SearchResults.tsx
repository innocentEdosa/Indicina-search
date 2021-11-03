import numeral from 'numeral';
import UserDataCard from 'components/UserDataCard';
import { useSearchData } from 'modules/search/utils/searchContext';
import RepositoryDataCard from 'components/RepositoryDataCard';
import { SEARCH_OPTIONS_ENUM, UserNode, RepositoryNode } from 'modules/search/models/search';
import Pagination from 'components/Pagination';
import styles from './searchresults.module.css';

const SearchResults = () => {
  const searchData = useSearchData();

  const pagination = <Pagination />;

  const renderResult = () => {
    if (searchData?.type === SEARCH_OPTIONS_ENUM.USERS) {
      return (
        <>
          <h3 className={styles.searchTotal}>{numeral(searchData?.data?.users?.userCount).format('0,0')} users</h3>
          <div className={styles.searchResults}>
            {searchData?.data?.users?.users?.map((user: UserNode) => (
              <UserDataCard key={user?.node?.name} {...user?.node} />
            ))}
          </div>
          {pagination}
        </>
      );
    }
    return (
      <>
        <h3 className={styles.searchTotal}>
          {numeral(searchData?.data?.repositories?.repositoryCount).format('0,0')} repository results
        </h3>
        <div className={styles.searchResults}>
          {searchData?.data?.repositories?.repositories?.map((repository: RepositoryNode) => (
            <RepositoryDataCard key={repository?.node?.nameWithOwner} {...repository.node} />
          ))}
        </div>
        {pagination}
      </>
    );
  };

  return <div aria-label="Search results">{!searchData?.isLoading && renderResult()}</div>;
};

export default SearchResults;
