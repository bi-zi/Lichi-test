import Link from "next/link";
import styles from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/bi-zi">bi_zi</Link>
    </footer>
  );
}
