import { gql } from "@apollo/client";

export const LIST_CATEGORIES_DASHBOARD = gql`
  query ListCategories {
  listCategories {
    id
    title
    description
    iconColor
    countTransactionByUser
    amount
  }
}
`

export const LIST_CATEGORIES_TITLE = gql`
  query ListCategories {
  listCategories {
    id
    title
  }
}
`