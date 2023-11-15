import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blogger",
  description: "An example of Next.js",
};

export default function Page() {
  return (
    <div className={styles.container}>
      This blogger is built with the following platform:
      <ul>
        <li>
          Next.js
          <ul>
            <li>A React-based open-source framework.</li>
            <li>
              <a href="https://nextjs.org/" target="_blank">
                https://nextjs.org/
              </a>
            </li>
          </ul>
        </li>
        <li>
          TypeScript
          <ul>
            <li>Extends JavaScript by adding types to the language.</li>
            <li>
              <a href="https://www.typescriptlang.org/" target="_blank">
                https://www.typescriptlang.org/
              </a>
            </li>
          </ul>
        </li>
        <li>
          GraphQL
          <ul>
            <li>A data query and manipulation language for APIs and a query runtime engine.</li>
            <li>
              <a href="https://graphql.org/" target="_blank">
                https://graphql.org/
              </a>
            </li>
          </ul>
        </li>
        <li>
          Apollo Client
          <ul>
            <li>A state management library that enables management of data with GraphQL.</li>
            <li>
              <a href="https://www.apollographql.com/docs/react/" target="_blank">
                https://www.apollographql.com/docs/react/
              </a>
            </li>
          </ul>
        </li>
        <li>
          Hasura
          <ul>
            <li>A GraphQL API.</li>
            <li>
              <a href="https://hasura.io/" target="_blank">
                https://hasura.io/
              </a>
            </li>
          </ul>
        </li>
        <li>
          MongoDB
          <ul>
            <li>A NoSQL database program.</li>
            <li>
              <a href="https://www.mongodb.com/" target="_blank">
                https://www.mongodb.com/
              </a>
            </li>
          </ul>
        </li>
        <li>
          MongoDB Atlas (on AWS)
          <ul>
            <li>A fully managed MongoDB in the cloud.</li>
            <li>
              <a href="https://www.mongodb.com/atlas/database" target="_blank">
                https://www.mongodb.com/atlas/database
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
