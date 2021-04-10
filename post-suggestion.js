const form = document.querySelector("form");

form.addEventListener("submit", userSubmitted);

function userSubmitted(evt) {
  evt.preventDefault();
  console.log(form.elements.title.value);
  console.log(form.elements.username.value);
  console.log(form.elements.content.value);

  const playload = {
    title: form.elements.title.value,
    username: form.elements.username.value,
    content: form.elements.content.value,
  };

  document.querySelector("input[type=submit]").disabled = true;

  fetch("https://kea21s-5d8f.restdb.io/rest/posts", {
    method: "POST",
    headers: {
      "x-apikey": "606d5ed3f553500431007503",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(playload),
  })
    .then((response) => {
      console.log(response);
      document.querySelector("input[type=submit]").disabled = false;
      form.elements.title.value = "";
      form.elements.username.value = "";
      form.elements.content.value = "";
      document.querySelector("p.hidden").classList.remove("hidden");
    })
    .catch((err) => {
      console.error(err);
    });
}
