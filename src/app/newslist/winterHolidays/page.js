import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function winterHolidays() {
  return (
    <>
    <div className="news-container">
      <h1>
        <span style={{
          backgroundImage: 'linear-gradient(135deg, #e6ba5d 0%, #9ac78a 100%)',
          WebkitBackgroundClip: 'text',
          MozBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          NEWS
        </span>
      </h1>
      <h2>お知らせ</h2>
      <h3>冬季休暇のご案内</h3>
      <p>2024.12.24</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum?
      </p>
      <div className={styles.linkContainer}>
        <Link href="/news" className={styles.backLink}>← お知らせ一覧に戻る</Link>
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
