const searchParams = new URLSearchParams(window.location.search);
const articleId = searchParams.get("article");

fetch(
  "https://kea21s-5d8f.restdb.io/rest/posts/" +
    articleId +
    "?fetchchildren=true",
  {
    method: "GET",
    headers: {
      "x-apikey": "606d5ed3f553500431007503",
    },
  }
)
  .then((res) => res.json())
  .then((response) => {
    showPost(response);
  })
  .catch((err) => {
    console.error(err);
  });
  
function showPost(data) {
  document.querySelector("h1").textContent = data.title;
  document.querySelector("h2 span").textContent = data.username;
  document.querySelector("p").textContent = data.content;


  const template = document.querySelector("template.commentslist").content;
  data.comments.forEach((comment) => {
    const copy = template.cloneNode(true);

    copy.querySelector("h4").textContent = comment.username;
    copy.querySelector("p").textContent = comment.content;
    document.querySelector("main").appendChild(copy);
  });
  if (data.comments.length === 0){
    const copy = template.cloneNode(true);
    copy.querySelector("h4").textContent = "No comments yet. Be the first one!";
    copy.querySelector("p").textContent = "";
    document.querySelector("main").appendChild(copy);

  }
}

