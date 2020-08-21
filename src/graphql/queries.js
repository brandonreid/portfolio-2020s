// @flow
// this is an auto generated file. This will be overwritten

export const getProtectedPort = /* GraphQL */ `
  query GetProtectedPort($id: ID!) {
    getProtectedPort(id: $id) {
      id
      markup
      createdAt
      updatedAt
    }
  }
`;
export const listProtectedPorts = /* GraphQL */ `
  query ListProtectedPorts(
    $filter: ModelProtectedPortFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProtectedPorts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        markup
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
