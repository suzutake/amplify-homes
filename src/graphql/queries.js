/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHome = /* GraphQL */ `
  query GetHome($id: ID!) {
    getHome(id: $id) {
      id
      address
      image_url
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listHomes = /* GraphQL */ `
  query ListHomes(
    $filter: ModelHomeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        image_url
        price
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
