import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 shadow-md px-16 py-4 flex justify-between items-baseline ${styles["header-bg"]}`}
    >
      <div className={`py-2 ${styles["logo-div"]}`}>
        <span className={`text-3xl font-bold ${styles["logo-title-name"]}`}>
          Ariel Magbanua
        </span>
        <span className={`text-3xl font-bold ${styles["logo-title-dot"]}`}>
          .
        </span>
      </div>
      <nav>
        <ul className="flex justify-between items-baseline gap-8">
          <li className={styles["nav-item"]}>
            <Link href="/">Me</Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
