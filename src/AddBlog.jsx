import { useState } from 'react';

const AddBlog = ({ addBlog }) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !summary || !date) return;
    addBlog({ title, summary, date });
    setTitle('');
    setSummary('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} style={{
      marginBottom: '2rem',
      background: '#f9f9f9',
      padding: '1.5rem',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          display: 'block',
          marginBottom: '1rem',
          padding: '0.75rem',
          width: '100%',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '1rem'
  }}
/>  

      <input
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        style={{
          display: 'block',
          marginBottom: '1rem',
          padding: '0.75rem',
          width: '100%',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '1rem'    
          }}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
          style={{
          display: 'block',
          marginBottom: '1rem',
          padding: '0.75rem',
          width: '100%',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '1rem'    
          }}
      />
      <button
        type="submit"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}
      >
  ➕ Add Blog
</button>

    </form>
  );
};

export default AddBlog;
