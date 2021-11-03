import { gql } from 'graphql-request';

export const SEARCH_GITHUB_USERS_WITH_REPO_COUNT = gql`
  query getGithubUsers($q: String!) {
    users: search(query: $q, type: USER, first: 10) {
      userCount
      edges {
        node {
          ... on User {
            name
            login
            url
            bio
          }
        }
      }
    }
    repositories: search(query: $q, type: REPOSITORY) {
      repositoryCount
    }
  }
`;

export const SEARCH_GITHUB_REPO_WITH_USERS_COUNT = gql`
  query getGithubRepos($q: String!) {
    repositories: search(query: $q, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            nameWithOwner
            description
            url
            updatedAt
            licenseInfo {
              name
            }
            stargazerCount
            languages(first: 1) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
    users: search(query: $q, type: USER) {
      userCount
    }
  }
`;
