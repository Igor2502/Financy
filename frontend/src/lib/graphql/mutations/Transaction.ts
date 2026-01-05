import { gql } from "@apollo/client";

export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($data: TransactionInput!, $categoryId: String!) {
    createTransaction(data: $data, categoryId: $categoryId) {
      id
      description
      amount
      date
      category {
        title
        description
      }
    }
  }
`;