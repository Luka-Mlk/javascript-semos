function savePost(post) {
  // request body -- podatoci sto sakame da gi zacuvame
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", // http method
    body: JSON.stringify(post),
  });
}
savePost({
  userId: 101,
  title: "First post",
  body: "My first http post",
});
function deletePost(post) {
  // request body -- podatoci sto sakame da gi zacuvame
  fetch(`https://jsonplaceholder.typicode.com/posts/${post}`, {
    method: "DELETE", // http method
  });
}
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  localStorage.setItem("posts", JSON.stringify(data));
}
if (localStorage.getItem("posts")) {
  getPosts();
}
