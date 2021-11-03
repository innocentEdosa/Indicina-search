import { UseQueryResult } from 'react-query';
import useUrlQueryString from 'hooks/useUrlQueryString';
import React, { createContext, useContext, Context } from 'react';

interface SearchDataContextProps<D, T> {
  isLoading: boolean;
  data?: D;
  params?: T;
  search?: string;
}

export function createSearchDataContext<D, T>() {
  return createContext<SearchDataContextProps<D, T> | undefined>(undefined);
}

export function createSearchDataContextProvider<D, T>(
  query: (params: T) => UseQueryResult<D>,
  SearchContext: Context<SearchDataContextProps<D, T> | undefined>,
) {
  return ({ children }: { children: React.ReactChild }) => {
    const urlQueryString = useUrlQueryString();
    const params: T & { search?: string } = urlQueryString.parseUrlSearchParamsToObj();

    const { isLoading, data } = query(params);

    return (
      <SearchContext.Provider value={{ search: params.search, isLoading, data, params }}>
        {children}
      </SearchContext.Provider>
    );
  };
}

export function SearchDataContextFactory<D, T>(query: (params: T) => UseQueryResult<D>) {
  const SearchContext = createSearchDataContext<D, T>();
  const SearchProvider = createSearchDataContextProvider<D, T>(query, SearchContext);
  const useSearchData = () => useContext<SearchDataContextProps<D, T> | undefined>(SearchContext);

  return {
    SearchContext,
    SearchProvider,
    useSearchData,
  };
}
