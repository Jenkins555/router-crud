import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

/**
 * Компонент для просмотра одного поста.
 * @component
 */

function PostView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:7070/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data.post));
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:7070/posts/${id}`, { method: "DELETE" }).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div>
         <Link to="/" className="edit-link">
        Главная
      </Link>
      {post ? (
        <div className="post-card">
          <h2>Просмотр поста</h2>
          <p>{post.content}</p>
          <button onClick={handleDelete}>Удалить</button>
          <Link to={`/posts/${id}/edit`} className="edit-link">
            Редактировать
          </Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default PostView;
