export async function loadInstaPosts() {
  const res = await fetch(
    `https://graph.facebook.com/v14.0/17841450072012853?fields=media.limit(6){media_url,media_type,permalink}&access_token=${process.env.INSTA_GRAPH_API_KEY}`,
  );
  const data = await res.json();
  console.log(data.media.data);
  return data;
}

export async function loadNotePosts() {
  const res = await fetch(`https://note.com/api/v2/creators/yama_to_web/contents?kind=note&page=1`);
  const data = await res.json();

  return data;
}