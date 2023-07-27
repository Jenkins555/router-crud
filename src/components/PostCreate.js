import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/**
 * Компонент для создания нового поста.
 * @component
 */

function PostCreate() {
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  // Регулярное выражение для параметра :content
  const contentRegex = /^[A-Za-zА-Яа-я0-9_\s]{1,300}$/;

  const handleSubmit = () => {
    // Проверяем, соответствует ли введенный контент регулярному выражению
    if (!contentRegex.test(content)) {
      alert("Недопустимые символы в контенте поста или превышен лимит символов!");
      return;
    }

    fetch("http://localhost:7070/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: 0, content }),
    }).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div>
        <Link to="/" className="edit-link">
        Главная
      </Link>
      <div className="post-card">
        <h2>Создание поста</h2>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleSubmit}>Опубликовать</button>
      </div>
    </div>
  );
}

export default PostCreate;
