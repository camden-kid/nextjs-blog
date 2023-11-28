import Aside from "../aside/Aside";
import styles from "./MainLayout.module.css";
import Footer from "../footer/Footer";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../header/Header"), { ssr: false });

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
