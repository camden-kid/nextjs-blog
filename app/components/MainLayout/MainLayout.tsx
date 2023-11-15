import Aside from "../Aside/Aside";
import Nav from "../Nav/Nav";
import styles from "./MainLayout.module.css";

export default function MainLayout({ children }): JSX.Element {
  return (
    <>
      <header className={styles.header}>Blogger</header>
      <div className={styles.container}>
        <Nav />
        <main className={styles.main}>{children}</main>
        <Aside />
      </div>
      <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/pinakin-desai-601017277/" target="_blank">
          &copy; Pinakin Desai
        </a>
      </footer>
    </>
  );
}
