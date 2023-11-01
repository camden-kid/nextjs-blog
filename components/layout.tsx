"use client";

import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const name = "Next.js / Apollo Client / Hasura / MongoDB";
export const siteTitle = "Next.js Example";

export default function Layout({ children }) {
  const pathname = usePathname();
  const home = pathname === "/";

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
