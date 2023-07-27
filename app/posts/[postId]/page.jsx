import PostDetailsComponent from "@/app/components/PostDetailsComponent";
import { Suspense } from "react";

const PostDetails = async ({ params }) => {
  const postId = params.postId;

  const loadingJSX = <div>Loading...</div>;
  return (
    <div className="post" style={{ padding: "0 20px" }}>
      <h1>Post Details</h1>

      <Suspense fallback={loadingJSX}>
        <PostDetailsComponent postId={postId} />
      </Suspense>
    </div>
  );
};

export default PostDetails;
