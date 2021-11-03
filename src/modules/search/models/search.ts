export enum SEARCH_OPTIONS_ENUM {
  'REPOSITORY' = 'repository',
  'USERS' = 'users',
}

export type User = {
  name: string;
  bio?: string;
  login?: string;
  url?: string;
};

export type UserNode = {
  node: User;
};

export type Repository = {
  description?: string;
  licenseInfo?: {
    name: string;
  };
  languages?: { edges: { node: { name: string } }[] };
  nameWithOwner?: string;
  stargazerCount?: number;
  updatedAt?: string;
  url: string;
};

export type RepositoryNode = {
  node: Repository;
};

export type SearchParams = {
  q: string;
  type?: SEARCH_OPTIONS_ENUM;
};
