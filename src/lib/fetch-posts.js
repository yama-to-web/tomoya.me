export async function loadInstaPosts(limit = 6) {
  const res = await fetch(
    `https://graph.facebook.com/v14.0/17841450072012853?fields=media.limit(${limit}){media_url,permalink}&access_token=${process.env.INSTA_GRAPH_API_KEY}`,
  );
  let data = await res.json();
  let ImgData = [];
  if (data) {
    ImgData = data.media.data.map((img) => {
      return img;
    }, {});
  }
  return ImgData;
}

export async function loadNotePosts() {
  const res = await fetch(`https://note.com/api/v2/creators/yama_to_web/contents?kind=note&page=1`);
  const data = await res.json();

  return data;
}
