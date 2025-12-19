import { Routes, Route } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import Layout from './layout/Layout';
import PostsList from './pages/PostsList';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import About from './pages/About';
import Contacts from './pages/Contacts';

export const PostsContext = createContext();

export default function App() {
  const [posts, setPosts] = useState(() => {
    try {
      const raw = localStorage.getItem('posts');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  const addPost = (newPost) => {
    const postWithId = { ...newPost, id: Date.now() };
    setPosts(prev => [postWithId, ...prev]);
  };

  const updatePost = (updatedPost) => {
    setPosts(prev => prev.map(post => post.id === updatedPost.id ? updatedPost : post));
  };

  const deletePost = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  useEffect(() => {
    try {
      localStorage.setItem('posts', JSON.stringify(posts));
    } catch (e) {
      //
    }
  }, [posts]);

  return (
    <PostsContext.Provider value={{ posts, setPosts, addPost, updatePost, deletePost }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsList />} />
          <Route path="post/:id" element={<PostDetail />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="edit/:id" element={<EditPost />} />

        </Route>
      </Routes>
    </PostsContext.Provider>
  );
}