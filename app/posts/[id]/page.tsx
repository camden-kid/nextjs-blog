import { getAllPostIds, getPostData } from "../../../lib/posts";
import Date from "../../../components/date";
import styles from "./page.module.css";

export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllPostIds();
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id);

  return (
    <article>
      <div className={styles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
