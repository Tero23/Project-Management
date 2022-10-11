import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
  mutation ($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

const DELETE_CLIENT = gql`
  mutation ($id: ID!) {
    deleteClient(id: $id) {
      name
    }
  }
`;

export { DELETE_CLIENT, ADD_CLIENT };
