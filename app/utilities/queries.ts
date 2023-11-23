// inside /app/utilities/queries.ts

import { gql, DocumentNode } from "@apollo/client";

const GET_ALL_POSTS: DocumentNode = gql`
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

const GET_POST: DocumentNode = gql`
  query GetPost($id: Int) {
    post(where: { id: { _eq: $id } }) {
      text
      title
    }
  }
`;
