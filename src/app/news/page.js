"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CATEGORIES = [
  { id: 'menu', label: 'メニュー情報' },
  { id: 'event', label: 'イベント' },
  { id: 'holiday', label: '休業日' },
  { id: 'other', label: 'その他' }
];

export default function news() {
  const [newsItems, setNewsItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem('news') || '[]');
    setNewsItems(storedNews);
  }, []);

  const filteredNews = selectedCategory === 'all'
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
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
      <h2 style={{ textAlign: 'center' }}>お知らせ</h2>
      <h3 style={{ textAlign: 'center' }}>お知らせアーカイブ</h3>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <p>カテゴリ</p>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        >
          <option value="all">すべて表示</option>
          {CATEGORIES.map(category => (
            <option key={category.id} value={category.id}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
      <ul style={{ padding: '30px 20%' }}>
        {filteredNews.map(item => (
          <li
            key={item.id}
            style={{
              padding: '10px',
            }}
          >
            <Link href={`/newslist/${item.id}`}>
              {item.date} {item.title}
              <span style={{
                marginLeft: '10px',
                fontSize: '0.8em',
                color: '#666'
              }}>
                {CATEGORIES.find(cat => cat.id === item.category)?.label || 'その他'}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div style={{
        textAlign: 'right',
        marginTop: '2rem',
        marginBottom: '2rem'
      }}>
        <Link href={`/login/`}>
          <Button
            variant="text"
            size="small"
            sx={{
              color: '#666',
              fontSize: '0.8rem',
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#333'
              }
            }}
          >
            管理者ログイン
          </Button>
        </Link>
      </div>
      <footer>
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
