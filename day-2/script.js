const form = document.getElementById("title-search");
const input = document.getElementById("search");
const resultsDiv = document.getElementById("results");

let posts = [];

// Fetch API data
async function getdata() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await response.json();
  } catch (error) {
    console.log("Error:", error);
  }
}

getdata();

function displayPosts(postsArray) {
  resultsDiv.innerHTML = "";
  if (postsArray.length === 0) {
    resultsDiv.innerHTML = "<p>No results found.</p>";
    return;
  }
  postsArray.forEach(post => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
      <h3>${post.title}</h3>`;
    resultsDiv.appendChild(postEl);
  });
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const keyword = input.value.toLowerCase();
  const searchedPosts = posts.filter(post =>
    post.title.toLowerCase().includes(keyword)
  );

  displayPosts(searchedPosts); 
});
