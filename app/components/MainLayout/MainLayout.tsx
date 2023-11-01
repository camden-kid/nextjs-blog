import styles from "./MainLayout.module.css";

export default function MainLayout({ children }): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        Blogger [Next.js, Apollo Client, Hasura, MongoDB, Material UI]
      </header>
      <div className={styles.container}>
        <nav className={styles.nav}></nav>
        <main className={styles.main}>{children}</main>
        <aside className={styles.aside}></aside>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/pinakin-desai-601017277/"
          target="_blank"
        >
          &copy; Pinakin Desai
        </a>
      </footer>
    </>
  );
}
