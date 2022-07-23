export async function loadInstaPosts(limit = 6) {
  const res = await fetch(
    `https://graph.facebook.com/v14.0/17841450072012853?fields=media.limit(${limit}){media_url,permalink}&access_token=${process.env.INSTA_GRAPH_API_KEY}`,
  );
  let data = await res.json();
  if (data) {
    data = data.media.data.map((img) => {
      img.media_url = img.media_url.replace(/^[^.]*/, 'https://scontent-nrt1-1');
      return img;
    }, {});
  }
  return data;
}

export async function loadNotePosts() {
  const res = await fetch(`https://note.com/api/v2/creators/yama_to_web/contents?kind=note&page=1`);
  const data = await res.json();

  return data;
}
