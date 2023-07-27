const PostDetailsComponent = async ({ postId }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: { revalidate: 120 },
    }
  );
  const post = await res.json();
  return (
    <div
      key={post.id}
      style={{
        padding: "10px",
        margin: "20px 0",
        border: "1px solid #ccc",
        borderRadius: "10px",
        width: "100%",
      }}
    >
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetailsComponent;
