"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";

const AdminContainer = styled.div`
  padding: 20px;
`;

const NewsItem = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;
`;

export default function AdminNews() {
  const [news, setNews] = useState([]);
  const [editingNews, setEditingNews] = useState(null);

  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem('news') || '[]');
    setNews(storedNews);
  }, []);

  const handleEdit = (newsItem) => {
    setEditingNews(newsItem);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedNews = news.map(item =>
      item.id === editingNews.id ? editingNews : item
    );
    setNews(updatedNews);
    localStorage.setItem('news', JSON.stringify(updatedNews));
    setEditingNews(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('本当に削除しますか？')) {
      const updatedNews = news.filter(item => item.id !== id);
      setNews(updatedNews);
      localStorage.setItem('news', JSON.stringify(updatedNews));
    }
  };

  return (
    <AdminContainer>
      <h2>お知らせ管理</h2>
      {news.map(item => (
        <NewsItem key={item.id}>
          {editingNews?.id === item.id ? (
            <form onSubmit={handleUpdate}>
              <input
                type="date"
                value={editingNews.date}
                onChange={(e) => setEditingNews({...editingNews, date: e.target.value})}
              />
              <input
                type="text"
                value={editingNews.title}
                onChange={(e) => setEditingNews({...editingNews, title: e.target.value})}
              />
              <textarea
                value={editingNews.content}
                onChange={(e) => setEditingNews({...editingNews, content: e.target.value})}
              />
              <Button type="submit">保存</Button>
              <Button type="button" onClick={() => setEditingNews(null)}>キャンセル</Button>
            </form>
          ) : (
            <>
              <div>
                <p>{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
              <ButtonGroup>
                <Button onClick={() => handleEdit(item)}>編集</Button>
                <Button onClick={() => handleDelete(item.id)}>削除</Button>
              </ButtonGroup>
            </>
          )}
        </NewsItem>
      ))}
    </AdminContainer>
  );
}
