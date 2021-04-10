function getdata() {
  fetch("https://kea21s-5d8f.restdb.io/rest/posts", {
    method: "GET",
    headers: {
      "x-apikey": "606d5ed3f553500431007503",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      showPosts(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
getdata();

function showPosts(posts) {
  console.log(posts);

  const template = document.querySelector("template.frontpagelist").content;
  posts.forEach((post) => {
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = post.title;
    copy.querySelector("h3 span").textContent = post.username;
    copy.querySelector("a.readmore").href = `article.html?article=${post._id}`;
    document.querySelector("main").appendChild(copy);
  });
}
