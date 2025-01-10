"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from './page.module.css';

export default function NewsDetail() {
  const params = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem('news') || '[]');
    const foundArticle = storedNews.find(item => item.id.toString() === params.id);
    setArticle(foundArticle);
  }, [params.id]);

  if (!article) return <div>記事が見つかりません</div>;

  return (
    <>
      <div className={styles.newsContainer}>
        <h1>
          <span className={styles.newsTitle}>NEWS</span>
        </h1>
        <h2>お知らせ</h2>
        <h3>{article.title}</h3>
        <p>{article.date}</p>
        <p>{article.content}</p>

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
  );
}
