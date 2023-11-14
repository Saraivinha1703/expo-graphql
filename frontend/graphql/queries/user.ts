import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;

export const GET_USER = gql`
  query {
    user {
      name
    }
  }
`;

export const NEW_USER = gql`
  mutation ($name: String!) {
    createUser(name: $name)
  }
`;
