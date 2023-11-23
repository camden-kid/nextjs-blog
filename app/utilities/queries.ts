// inside /app/utilities/queries.ts

import { gql } from "@apollo/client";

gql`
  query GetAllPosts {
    post {
      id
      text
      title
      user_id
      created
    }
  }
`;

gql`
  query GetPost($id: Int) {
    post(where: { id: { _eq: $id } }) {
      text
      title
    }
  }
`;

gql`
  mutation AddPost($created: Int, $text: String, $title: String, $user_id: Int) {
    insert_post_one(object: { created: $created, text: $text, title: $title, user_id: $user_id }) {
      id
    }
  }
`;
