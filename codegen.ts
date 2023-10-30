import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

module.exports = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string]: {
        headers: {
          "x-hasura-role": "admin",
          "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: ["./app/**/*.tsx", "./app/**/*.ts"],
  overwrite: true,
  generates: {
    "./app/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
