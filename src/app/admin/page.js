"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const AdminContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Form = styled.form`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
  }

  input, textarea {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #666;
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

const NewsItem = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  h4 {
    font-size: 18px;
    margin: 0 0 8px 0;
    color: #333;
  }

  p {
    margin: 0;

    &:first-of-type {
      color: #666;
      font-size: 14px;
      margin-bottom: 12px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 16px;
`;

const NewsSection = styled.section`
  margin-top: 40px;

  h3 {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #eee;
  }
`;

const LogoutButton = styled.button`
  margin-top: 30px;
  padding: 8px 16px;
  background: #fa8072;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #d32f2f;
  }
`;

const CATEGORIES = [
  { id: 'menu', label: 'メニュー情報' },
  { id: 'event', label: 'イベント' },
  { id: 'holiday', label: '休業日' },
  { id: 'other', label: 'その他' }
];

const Select = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;

const STATIC_NEWS = [
  // {
  //   id: 'winterHolidays',
  //   date: '2024-12-24',
  //   title: '冬季休暇のご案内',
  //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum?',
  //   isStatic: true
  // },
  // {
  //   id: 'xmasMenu',
  //   date: '2024-12-10',
  //   title: 'クリスマス特別メニューのご案内',
  //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum?',
  //   isStatic: true
  // },
  // {
  //   id: 'winterMenu',
  //   date: '2024-11-01',
  //   title: 'ウィンターシーズン特別メニューのご案内',
  //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum?',
  //   isStatic: true
  // },
  // {
  //   id: 'halloweenMenu',
  //   date: '2024-10-01',
  //   title: 'ハロウィン特別メニューのご案内',
  //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque nulla deleniti quia sequi dignissimos tenetur praesentium maxime velit nam suscipit reprehenderit voluptates porro quibusdam, laborum quasi aspernatur dolores eum?',
  //   isStatic: true
  // }
];

export default function Admin() {
  const {user, logout} = useAuth();
  const router = useRouter();
  const [news, setNews] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    date: new Date().toISOString().split('T')[0],
    category: "other"
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if(!user) {
      router.push("/login");
      return;
    }

    // ローカルストレージからニュースを取得
    const storedNews = JSON.parse(localStorage.getItem('news') || '[]');

    // 静的なニュースとローカルストレージのニュースをマージ
    const staticNewsInStorage = JSON.parse(localStorage.getItem('staticNews') || 'null');
    const initialStaticNews = staticNewsInStorage || STATIC_NEWS;

    // マージしたニュースを日付順にソート
    const allNews = [...initialStaticNews, ...storedNews].sort((a, b) =>
      new Date(b.date) - new Date(a.date)
    );

    setNews(allNews);

    // 初回のみ静的ニュースをローカルストレージに保存
    if (!staticNewsInStorage) {
      localStorage.setItem('staticNews', JSON.stringify(STATIC_NEWS));
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      // 編集モード
      const updatedNews = news.map(item => {
        if (item.id === editingId) {
          return { ...formData, id: editingId, isStatic: item.isStatic };
        }
        return item;
      });
      setNews(updatedNews);

      // 静的ニュースと動的ニュースを分けて保存
      const { staticNews, dynamicNews } = updatedNews.reduce((acc, item) => {
        if (item.isStatic) {
          acc.staticNews.push(item);
        } else {
          acc.dynamicNews.push(item);
        }
        return acc;
      }, { staticNews: [], dynamicNews: [] });

      localStorage.setItem('staticNews', JSON.stringify(staticNews));
      localStorage.setItem('news', JSON.stringify(dynamicNews));
      setEditingId(null);
    } else {
      // 新規追加モード（変更なし）
      const newArticle = {
        id: Date.now().toString(),
        ...formData,
        isStatic: false
      };
      const updatedNews = [newArticle, ...news];
      setNews(updatedNews);
      const dynamicNews = updatedNews.filter(item => !item.isStatic);
      localStorage.setItem('news', JSON.stringify(dynamicNews));
    }

    // フォームをリセット
    setFormData({
      title: "",
      content: "",
      date: new Date().toISOString().split('T')[0],
      category: "other"
    });

    alert(editingId ? '記事が更新されました' : '記事が登録されました');
  };

  const handleEdit = (article) => {
    setFormData({
      title: article.title,
      content: article.content,
      date: article.date,
      category: article.category
    });
    setEditingId(article.id);
  };

  const handleDelete = (id) => {
    if (window.confirm('本当に削除しますか？')) {
      const updatedNews = news.filter(item => item.id !== id);
      setNews(updatedNews);

      // 静的ニュースと動的ニュースを分けて保存
      const { staticNews, dynamicNews } = updatedNews.reduce((acc, item) => {
        if (item.isStatic) {
          acc.staticNews.push(item);
        } else {
          acc.dynamicNews.push(item);
        }
        return acc;
      }, { staticNews: [], dynamicNews: [] });

      localStorage.setItem('staticNews', JSON.stringify(staticNews));
      localStorage.setItem('news', JSON.stringify(dynamicNews));
    }
  };

  return (
    <AdminContainer>
      <h1>NEWS</h1>
      <h2>管理画面</h2>
      {user ? (
        <div>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label>日付</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>カテゴリー</label>
              <Select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                required
              >
                {CATEGORIES.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <label>タイトル</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>本文</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                required
              />
            </FormGroup>
            <ButtonContainer>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                type="submit"
              >
                {editingId ? '更新' : '登録'}
              </Button>
              {editingId && (
                <Button
                  variant="outlined"
                  onClick={() => {
                    setEditingId(null);
                    setFormData({
                      title: "",
                      content: "",
                      date: new Date().toISOString().split('T')[0],
                      category: "other"
                    });
                  }}
                >
                  キャンセル
                </Button>
              )}
            </ButtonContainer>
          </Form>

          <NewsSection>
            <h3>お知らせ一覧</h3>
            {news.map(item => (
              <NewsItem key={item.id}>
                <p>{item.date}</p>
                <h4>{item.title}</h4>
                <p>
                  <small>
                    {CATEGORIES.find(cat => cat.id === item.category)?.label || 'その他'}
                  </small>
                </p>
                <p>{item.content}</p>
                <ButtonGroup>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEdit(item)}
                  >
                    編集
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(item.id)}
                  >
                    削除
                  </Button>
                </ButtonGroup>
              </NewsItem>
            ))}
          </NewsSection>

          <LogoutButton onClick={logout}>
            ログアウト
          </LogoutButton>
        </div>
      ) : (
        <p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/login")}
          >
            ログイン
          </Button>
        </p>
      )}
      {/* <footer>
        <p>
          <Image
            src="/images/footer_logo.svg"
            alt=""
            width={300}
            height={300}
          />
        </p>
      </footer> */}
    </AdminContainer>
  );
}
