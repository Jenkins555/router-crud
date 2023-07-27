
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Компонент для отображения главной страницы со списком постов.
 * @component
 */

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7070/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Главная страница</h2>
      <Link to="/posts/new" className="edit-link">
        Создать пост
      </Link>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <p>{post.content}</p>
          <Link to={`/posts/${post.id}`} className="edit-link">
            Просмотр
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
