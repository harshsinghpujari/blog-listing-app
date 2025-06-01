import { useState, useEffect } from 'react';
import AddBlog from './AddBlog';
import BlogList from './BlogList';

function App() {
  const [blogs, setBlogs] = useState(() => {
    const stored = localStorage.getItem('blogs');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  return (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: '#f4f6f8',
      padding: '2rem',
      // border: '3px dashed red'//added for debugging
    }}
  >
    <div
      style={{
        width: '100%',
        maxWidth: '800px',
        background: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(0,0,0,0.05)',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h1 style={{
        textAlign: 'center',
        color: '#289ec2',
        marginBottom: '2rem'
      }}>
        📝 My Blog App
      </h1>
      <AddBlog addBlog={addBlog} />
      <BlogList blogs={blogs} />
    </div>
  </div>
);


}

export default App;
