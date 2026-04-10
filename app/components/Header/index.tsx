import styles from "./Header.module.css";

export default function Header() {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white shadow-md py-4 ${styles["header-bg"]}`}
    >
      <div className={`container mx-auto px-4 py-2 ${styles["logo-div"]}`}>
        <span className={`text-3xl font-bold ${styles["logo-title-name"]}`}>
          Ariel Magbanua
        </span>
        <span className={`text-4xl font-bold ${styles["logo-title-dot"]}`}>
          .
        </span>
      </div>
    </header>
  );
}
