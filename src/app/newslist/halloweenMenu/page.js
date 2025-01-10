import Image from "next/image";
import Link from "next/link";
import styles from './page.module.css';

export default function halloweenMenu() {
  return (
    <>
      <div className={styles.newsContainer}>
        <h1>
          <span className={styles.newsTitle}>NEWS</span>
        </h1>
        <h2>お知らせ</h2>
        <h3>ハロウィン特別メニューのご案内</h3>
        <p>2024.10.01</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum?
        </p>
        <div className={styles.linkContainer}>
          <Link href="/news" className={styles.backLink}>
            ← お知らせ一覧に戻る
          </Link>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>
          <Image
            src="/images/footer_logo.svg"
            alt=""
            width={300}
            height={300}
          />
        </p>
      </footer>
    </>
  )
}
