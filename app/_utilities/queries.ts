// inside /app/utilities/queries.ts

import { gql } from "@apollo/client";

gql`
  query GetAllPosts {
    post(order_by: { created: desc }, limit: 5) {
      id
      text
      title
      created
      user_name
    }
  }
`;

gql`
  query GetPost($id: Int) {
    post(where: { id: { _eq: $id } }) {
      text
      title
      created
      user_name
    }
  }
`;

gql`
  mutation AddPost($created: datetime, $text: String, $title: String, $user_name: String) {
    insert_post_one(object: { created: $created, text: $text, title: $title, user_name: $user_name }) {
      id
    }
  }
`;
