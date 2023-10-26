import { Metadata } from "next";
import Layout, { siteTitle } from "../components/layout";
import HomePage from "./home-page";
import { getSortedPostsData } from "../lib/posts";
import QueryResponse from "./components/QueryResponse";

export const metadata: Metadata = {
  title: siteTitle,
};

export default function Page() {
  const allPostsData = getSortedPostsData();
  return (
    <>
      <QueryResponse />
      <HomePage allPostsData={allPostsData} />
    </>
  );
}
