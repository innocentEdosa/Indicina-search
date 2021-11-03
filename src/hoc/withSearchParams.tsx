import React from 'react';

export default function withSearchParams<T>(SearchComponent: React.FC, SearchResultComponent: React.FC<T>) {
  const Component: React.FC<T & { hasSearchParams: boolean }> = props => {
    if (!props.hasSearchParams) return <SearchComponent />;
    return <SearchResultComponent {...props} />;
  };

  return Component;
}
