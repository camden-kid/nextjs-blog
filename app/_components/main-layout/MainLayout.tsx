import Aside from "../aside/Aside";
import styles from "./MainLayout.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function MainLayout({ children }): JSX.Element {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <Aside />
      </div>
      <Footer />
    </>
  );
}
