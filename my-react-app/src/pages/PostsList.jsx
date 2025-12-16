import { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { PostsContext } from '../App';
import './PostList.css';
import postsData from '../data/posts.json';

export default function PostsList() {
  const { posts, setPosts, deletePost } = useContext(PostsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Используем локальные данные из src/data/posts.json для разработки
    if (posts.length === 0) {
      try {
        setPosts(postsData);
      } catch (e) {
        console.error('Ошибка при загрузке локальных постов', e);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [posts, setPosts]);

  const handleDelete = (id) => {
    if (!window.confirm("Удалить пост?")) return;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    }).then(() => {
      deletePost(id); // удаляем из контекста/состояния
    });
  };

  if (loading) return <div>Загрузка...</div>;

  return (
    <div>
      <div className="posts-header">
        <h1>Посты</h1>
        <Link to='/create' className="add-button">Добавить пост</Link>
      </div>

      {posts.map(post => (
        <div key={post.id} className="post">
          <div className="post-actions">
            <Link to={`/edit/${post.id}`} className="btn small">Изменить</Link>
            <button className="btn small danger" onClick={() => handleDelete(post.id)}>Удалить</button>
          </div>

          <h3 className="post-title-gap">{post.title}</h3>
          <Link className="read-link" to={`/post/${post.id}`}>Читать далее</Link>
        </div>
      ))}
    </div>
  );
}
