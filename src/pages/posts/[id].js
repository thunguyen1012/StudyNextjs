import fetch from 'node-fetch';
import Link from 'next/link';
const apiUrl = 'http://localhost:4000';

function Post({ post, paths }) {
  return (
    <>
      <div>Post Id: {post.id}</div>
      <div>Post Id: {post.content}</div>
      <div>Related posts</div>
      <ul>
        {paths.map((p) => (
          <li>
            <Link key={p.id} href='/posts/[id]' as={p.uri}>
              <a>{`Post ${p.id}`}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(`${apiUrl}/posts/${id}`);
  const post = await res.json();
  const paths = await buildPaths();

  return { props: { post, paths } };
}

export async function getStaticPaths() {
  let paths = await buildPaths();
  paths = paths.map(p => p.uri);
  return { paths, fallback: false };
}

async function buildPaths() {
  const res = await fetch(`${apiUrl}/posts`);
  const posts = await res.json();
  const paths = posts.map(({ id }) => ({
    id,
    uri: `/posts/${id}`,
  }));
  return paths;
}

export default Post;
