import type { NextPage } from 'next';

const Skills: NextPage<React.ReactNode> = (props) => {
  console.log(props);
  return <></>;
};

export default Skills;

export async function getStaticProps(context) {
  const res = await fetch('https://note.com/api/v2/creators/yama_to_web/contents?kind=note&page=1');
  const posts = await res.json();

  return {
    props: posts,
  };
}
