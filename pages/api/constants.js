const BASE_URL = "https://afalldigital.com/wp-json/wp/v2/";
export async function getPosts() {
  const postsRes = await fetch(BASE_URL + "posts");
  const posts = await postsRes.json();
  return posts;
}

// export async function getProjects() {
//   const URL = process.env.WP_API_URL;
//   const postRes = await fetch(URL + "pages?slug='projects'");
//   const posts = await postRes.json();
//   return posts;
// }
