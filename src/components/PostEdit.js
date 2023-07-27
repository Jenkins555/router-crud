import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

/**
 * Компонент для редактирования существующего поста.
 * @component
 */

function PostEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`http://localhost:7070/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setContent(data.post.content));
  }, [id]);

  const handleSave = () => {
    fetch(`http://localhost:7070/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: Number(id), content }),
    }).then(() => {
      navigate(`/posts/${id}`, { replace: true });
    });
  };

  return (
    <div>
      <div className="post-card">
        <h2>Редактирование поста</h2>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleSave}>Сохранить</button>
        <button onClick={() => navigate(`/posts/${id}`, { replace: true })}>
          Отмена
        </button>
      </div>
    </div>
  );
}

export default PostEdit;
