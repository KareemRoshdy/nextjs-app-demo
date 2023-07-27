import Link from "next/link";

const PostsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 120 },
  });
  const posts = await res.json();

  const postsJSX = posts.map((post, index) => (
    <Link href={`posts/${post.id}`} style={{ width: "100%" }}>
      <div
        key={post.id}
        style={{
          padding: "10px",
          margin: "20px 0",
          border: "1px solid #ccc",
          borderRadius: "10px",
        }}
      >
        <h2>
          {index + 1}- {post.title}
        </h2>
        <p>{post.body}</p>
      </div>
    </Link>
  ));

  return (
    <div className="posts" style={{ padding: "0 20px" }}>
      <h1>Posts Page</h1>
      <div
        className="post-box"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {posts && postsJSX}
      </div>
    </div>
  );
};

export default PostsPage;
