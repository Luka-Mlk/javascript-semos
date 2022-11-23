// JSON.stringify(obj); // od obj vo json
// JSON.parse(json); // od json vo plain obj
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//   .catch(error => console.log(error))

// async function getTodos() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   console.log(data);
//   return data;
// }
// const getTodos = async (url) => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   console.log(data);
// };
// const data = await getTodos;

// Primeri
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    console.log(response.statusText);
    return;
  }
  const data = await response.json();
  generatePosts(data.slice(0, 11));
}
function generatePosts(posts) {
  posts.forEach((element) => {
    const newDiv = document.createElement("div");
    newDiv.id = element.id;
    const title = document.createElement("h1");
    title.innerHTML = element.title;
    const textarea = document.createElement("textarea");
    textarea.style = "height: 100px; width: 500px";
    textarea.innerHTML = element.body;
    textarea.readOnly = true;
    const button = document.createElement("button");
    button.innerHTML = "Show comments";
    newDiv.appendChild(title);
    newDiv.appendChild(textarea);
    newDiv.appendChild(button);
    button.onclick = () => getComments(element.id);
    document.body.appendChild(newDiv);
  });
  document.querySelector("h2").style.display = "none";
}

async function getComments(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const data = await response.json();
  generateComments(data);
}
function generateComments(comments) {
  comments.forEach((comment) => {
    const p = document.createElement("p");
    const tarea = document.createElement("textarea");
    p.innerHTML = comment.name;
    tarea.innerHTML = comment.body;
    document.getElementById(comment.postId).appendChild(p);
    document.getElementById(comment.postId).appendChild(tarea);
  });
}
getPosts();
