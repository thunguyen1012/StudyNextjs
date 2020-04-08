import fetch from 'node-fetch';
const apiUrl = 'http://localhost:4000';

function Post(props) {
  return <div>Now: {props.data.now}</div>;
}

export async function getServerSideProps() {
  const res = await fetch(`${apiUrl}/now`);
  const data = await res.json();

  return { props: { data } };
}

export default Post;
