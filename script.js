const postsContainer = document.getElementById("posts-container");
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter");

let limit = 3;
let page = 1; // this is the default

// Fetch posts from API
async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = await res.json();

  return data; // this is a promise so we have to use async await
}

// Show posts in DOM

async function showPosts() {
  const posts = await getPosts();

  console.log(posts);
}

// Show initial posts

showPosts();
