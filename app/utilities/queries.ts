// inside /app/utilities/queries.ts

import { gql, DocumentNode } from "@apollo/client";

const GET_ALL_POSTS: DocumentNode = gql`
  query GetAllPosts {
    post {
      _id
      text
      title
      user_id
      created
    }
  }
`;

const GET_POST: DocumentNode = gql`
  query GetPost($id: objectId) {
    post(where: { _id: { _eq: $id } }) {
      text
      title
    }
  }
`;
