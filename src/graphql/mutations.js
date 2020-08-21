// @flow
// this is an auto generated file. This will be overwritten

export const createProtectedPort = /* GraphQL */ `
  mutation CreateProtectedPort(
    $input: CreateProtectedPortInput!
    $condition: ModelProtectedPortConditionInput
  ) {
    createProtectedPort(input: $input, condition: $condition) {
      id
      markup
      createdAt
      updatedAt
    }
  }
`;
export const updateProtectedPort = /* GraphQL */ `
  mutation UpdateProtectedPort(
    $input: UpdateProtectedPortInput!
    $condition: ModelProtectedPortConditionInput
  ) {
    updateProtectedPort(input: $input, condition: $condition) {
      id
      markup
      createdAt
      updatedAt
    }
  }
`;
export const deleteProtectedPort = /* GraphQL */ `
  mutation DeleteProtectedPort(
    $input: DeleteProtectedPortInput!
    $condition: ModelProtectedPortConditionInput
  ) {
    deleteProtectedPort(input: $input, condition: $condition) {
      id
      markup
      createdAt
      updatedAt
    }
  }
`;
