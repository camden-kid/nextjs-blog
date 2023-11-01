import { Metadata } from "next";
import HomePage from "./home-page";
import { getSortedPostsData } from "../lib/posts";

export const metadata: Metadata = {
  title: "Blogger",
  description: "An example of Next.js"
};

export default function Page() {
  const allPostsData = getSortedPostsData();
  return <HomePage allPostsData={allPostsData} />;
}
