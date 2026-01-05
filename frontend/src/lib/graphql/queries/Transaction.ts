import { gql } from "@apollo/client"

export const LIST_TRANSACTIONS = gql`
  query ListTransactions {
    listTransactions {
      id
      description
      amount
      date
      categoryId
      category {
        title
        iconColor
      }
    }
  }
`