const BlogList = ({ blogs }) => {
  if (blogs.length === 0) return <p>No blogs added yet.</p>;

  return (
    <div>
      <h2>📚 Blog List</h2>
      {blogs.map((blog, index) => (
      <div
  key={index}
  style={{
    border: '1px solid #ddd',
    background: '#fff',
    padding: '1.5rem',
    marginBottom: '1rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  }}
>
  <h3 style={{ marginBottom: '0.5rem', color: '#289ec2' }}>{blog.title}</h3>
  <p style={{ marginBottom: '0.5rem', color: '#555' }}>{blog.summary}</p>
  <small style={{ color: '#888' }}>
    <i>📅 {blog.date}</i>
  </small>
</div>

      ))}
    </div>
  );
};

export default BlogList;
