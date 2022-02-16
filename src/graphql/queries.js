/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTerraformDevUser = /* GraphQL */ `
  query GetTerraformDevUser($user_id: String!) {
    getTerraformDevUser(user_id: $user_id) {
      user_id
      type
    }
  }
`;
export const listTerraformDevUsers = /* GraphQL */ `
  query ListTerraformDevUsers(
    $filter: TableTerraformDevUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerraformDevUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        user_id
        type
      }
      nextToken
    }
  }
`;
