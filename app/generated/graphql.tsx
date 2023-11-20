import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  objectId: { input: any; output: any; }
  string: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Mongodb_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** column ordering options */
export enum Mongodb_Order_By {
  /** in ascending order */
  Asc = 'asc',
  /** in descending order */
  Desc = 'desc'
}

/** Boolean expression to compare columns of type "objectId". All fields are combined with logical 'AND'. */
export type ObjectId_Mongodb_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['objectId']['input']>;
  _gt?: InputMaybe<Scalars['objectId']['input']>;
  _gte?: InputMaybe<Scalars['objectId']['input']>;
  _in?: InputMaybe<Array<Scalars['objectId']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['objectId']['input']>;
  _lte?: InputMaybe<Scalars['objectId']['input']>;
  _neq?: InputMaybe<Scalars['objectId']['input']>;
  _nin?: InputMaybe<Array<Scalars['objectId']['input']>>;
};

/** columns and relationships of "post" */
export type Post = {
  __typename?: 'post';
  _id: Scalars['objectId']['output'];
  created: Scalars['date']['output'];
  text: Scalars['string']['output'];
  title: Scalars['string']['output'];
  user_id: Scalars['objectId']['output'];
};

/** aggregated selection of "post" */
export type Post_Aggregate = {
  __typename?: 'post_aggregate';
  aggregate?: Maybe<Post_Aggregate_Fields>;
  nodes: Array<Post>;
};

/** aggregate fields of "post" */
export type Post_Aggregate_Fields = {
  __typename?: 'post_aggregate_fields';
  count: Scalars['Int']['output'];
};


/** aggregate fields of "post" */
export type Post_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<Post_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "post". All fields are combined with a logical 'AND'. */
export type Post_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Bool_Exp>>;
  _id?: InputMaybe<ObjectId_Mongodb_Comparison_Exp>;
  _not?: InputMaybe<Post_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Bool_Exp>>;
  created?: InputMaybe<Date_Mongodb_Comparison_Exp>;
  text?: InputMaybe<String_Mongodb_Comparison_Exp>;
  title?: InputMaybe<String_Mongodb_Comparison_Exp>;
  user_id?: InputMaybe<ObjectId_Mongodb_Comparison_Exp>;
};

/** Ordering options when selecting data from "post". */
export type Post_Order_By = {
  _id?: InputMaybe<Mongodb_Order_By>;
  created?: InputMaybe<Mongodb_Order_By>;
  text?: InputMaybe<Mongodb_Order_By>;
  title?: InputMaybe<Mongodb_Order_By>;
  user_id?: InputMaybe<Mongodb_Order_By>;
};

/** select columns of table "post" */
export enum Post_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  Created = 'created',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootPostArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Query_RootPost_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Query_RootPost_By_PkArgs = {
  _id: Scalars['objectId']['input'];
};


export type Query_RootUserArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  _id: Scalars['objectId']['input'];
};

/** Boolean expression to compare columns of type "string". All fields are combined with logical 'AND'. */
export type String_Mongodb_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['string']['input']>;
  _gt?: InputMaybe<Scalars['string']['input']>;
  _gte?: InputMaybe<Scalars['string']['input']>;
  _in?: InputMaybe<Array<Scalars['string']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['string']['input']>;
  _lte?: InputMaybe<Scalars['string']['input']>;
  _neq?: InputMaybe<Scalars['string']['input']>;
  _nin?: InputMaybe<Array<Scalars['string']['input']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootPostArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Subscription_RootPost_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Subscription_RootPost_By_PkArgs = {
  _id: Scalars['objectId']['input'];
};


export type Subscription_RootUserArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  _id: Scalars['objectId']['input'];
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  _id: Scalars['objectId']['output'];
  name: Scalars['string']['output'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int']['output'];
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  column?: InputMaybe<User_Select_Column>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _id?: InputMaybe<ObjectId_Mongodb_Comparison_Exp>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  name?: InputMaybe<String_Mongodb_Comparison_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  _id?: InputMaybe<Mongodb_Order_By>;
  name?: InputMaybe<Mongodb_Order_By>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Id = '_id',
  /** column name */
  Name = 'name'
}

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'query_root', post: Array<{ __typename?: 'post', _id: any, text: any, title: any, user_id: any, created: any }> };

export type GetPostQueryVariables = Exact<{
  id?: InputMaybe<Scalars['objectId']['input']>;
}>;


export type GetPostQuery = { __typename?: 'query_root', post: Array<{ __typename?: 'post', text: any, title: any }> };


export const GetAllPostsDocument = gql`
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

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
      }
export function useGetAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
        }
export function useGetAllPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
        }
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>;
export type GetAllPostsSuspenseQueryHookResult = ReturnType<typeof useGetAllPostsSuspenseQuery>;
export type GetAllPostsQueryResult = Apollo.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const GetPostDocument = gql`
    query GetPost($id: objectId) {
  post(where: {_id: {_eq: $id}}) {
    text
    title
  }
}
    `;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions?: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export function useGetPostSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostSuspenseQueryHookResult = ReturnType<typeof useGetPostSuspenseQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;