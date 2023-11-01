import Layout from "../../../components/layout";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Head from "next/head";
import Date from '../../../components/date';
import utilStyles from '../../../styles/utils.module.css';

export const dynamicParams = true;
 
export async function generateStaticParams() {
  return getAllPostIds();
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id);
  
  return (
    <Layout>
      <article>
        {/* <h1 className={utilStyles.headingXl}>{postData.title}</h1> */}
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
