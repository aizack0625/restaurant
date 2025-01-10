"use client";
import Image from "next/image";
import styled from "styled-components";
import { css } from "@emotion/css";
import Link from "next/link";
import { useEffect, useState } from "react";

const NewsSec = styled.div`
  margin: 0 60px;
  text-align: left;

  h3 {
    text-align: left;
  }
`;

const NewsItem = styled.div`
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const initialNews = [
  {
    id: "1",
    date: "2024-12-24",
    title: "冬季休暇のご案内",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum?",
    isArchived: false
  },
  {
    id: "2",
    date: "2024-12-10",
    title: "クリスマス特別メニューのご案内",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum?",
    isArchived: false
  },
  {
    id: "3",
    date: "2024-11-01",
    title: "ウィンターシーズン特別メニューのご案内",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum?",
    isArchived: false
  },
  {
    id: "4",
    date: "2024-10-01",
    title: "ハロウィン特別メニューのご案内",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum?",
    isArchived: false
  }
];

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // 初期データがない場合、initialNewsを設定
    const existingNews = localStorage.getItem('news');
    if (!existingNews || JSON.parse(existingNews).length === 0) {
      localStorage.setItem('news', JSON.stringify(initialNews));
      localStorage.setItem('archivedNews', JSON.stringify(initialNews)); // アーカイブにも同じデータを保存
      setNews(initialNews);
    } else {
      // 最新の3件のみを表示するように変更
      const allNews = JSON.parse(existingNews);
      const latestNews = allNews.slice(0, 3); // 最初の3件を取得
      setNews(latestNews);
    }
  }, []);

  return (
    <div className="mainArea">
      <header className="header">
      <h1>
        <Image
          src="/images/top_logo.svg"
          alt="Harvest Restaurant"
          width={240}
          height={100}
          // layout="fill"
          // objectFit="cover"
          // css={topimg}
        />
      </h1>
      </header>
      <main>
      <ul
        className="linkList"
        style={{
          listStyle: "none",
          marginTop: "60px",
          // textAlign: "center"
        }}
      >
        <li>
          <Link href={`/concept/`}>
            <Image
              src="/images/top_ph01.jpg"
              alt=""
              width={300}
              height={300}
              style={{ width: '100%', height: 'auto' }}
            />
            <span>CONCEPT</span>
          </Link>
        </li>
        <li>
          <Link href={`/menu/`}>
            <Image
              src="/images/top_ph02.jpg"
              alt=""
              width={300}
              height={150}
              // layout="fill"
              // objectFit="cover"
              // css={listImg}
            />
            <span>MENU</span>
          </Link>
        </li>
        <li>
          <Link href={`/info/`}>
            <Image
              src="/images/top_ph03.jpg"
              alt=""
              width={300}
              height={150}
              // layout="fill"
              // objectFit="cover"
              // css={listImg}
            />
            <span>INFORMATION</span>
          </Link>
        </li>
      </ul>
      <NewsSec>
        <Link href={`/news/`}>
          <h3 style={{ margin: '10px 0', paddingTop: '8px' }}>NEWS</h3>
        </Link>
        {news.length > 0 ? (
          news.map(newsItem => (
            <NewsItem key={newsItem.id}>
              <Link href={`/newslist/${newsItem.id}`}>
                <p className="newsItem">{newsItem.date} {newsItem.title}</p>
              </Link>
            </NewsItem>
          ))
        ) : (
          <NewsItem>
            <p>お知らせはありません</p>
          </NewsItem>
        )}
        <div style={{ textAlign: 'right', marginTop: '10px' }}>
          <Link href="/news" style={{ fontSize: '0.9em', color: '#666' }}>
            もっと見る →
          </Link>
        </div>
      </NewsSec>
      </main>
    </div>
  );
}

const topimg = css`
position: absolute;
    height: 10px;
    width: 100px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    color: transparent;
}
`;

const listImg = css`
  max-width: 100%;
  width: 400px;
  height: 400px;
`;


// const newsSec = css`
//   width: 200px;
//   margin: 30px auto;
//   text-align: center;
// `;
