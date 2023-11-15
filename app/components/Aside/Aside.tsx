import { getSortedPostsData } from "../../../lib/posts";
import Link from "next/link";
import Date from "../../../components/date";
import styles from "./Aside.module.css";

export default function Aside(): JSX.Element {
  const allPostsData = getSortedPostsData();

  return (
    <aside className={styles.aside}>
      <ul className={styles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={styles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={styles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </aside>
  );
}
