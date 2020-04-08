import fetch from 'node-fetch';
const apiUrl = 'http://localhost:4000';

function Post(props) {
  return (
    <>
      <div>Post Id: {props.post.id}</div>
      <div>Post Id: {props.post.content}</div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(`${apiUrl}/posts/${id}`);
  const post = await res.json();

  return { props: { post } };
}

export async function getStaticPaths() {
  const res = await fetch(`${apiUrl}/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => `/posts/${post.id}`);
  return { paths, fallback: false };
}

export default Post;
