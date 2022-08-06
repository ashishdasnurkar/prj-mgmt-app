import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
  mutation addProject($name: String!, $description: String!, $status: String!) {
    addClient(name: $name, description: $description, status: $status) {
      id
      name
      description
      status
    }
  }
`;

export { ADD_PROJECT };
