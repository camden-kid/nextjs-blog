// inside /app/utilities/queries.ts

import { gql, DocumentNode } from "@apollo/client";

const MY_QUERY: DocumentNode = gql`
  query MyQuery {
    posts {
      text
      title
      user_id
    }
  }
`;

export { MY_QUERY };
