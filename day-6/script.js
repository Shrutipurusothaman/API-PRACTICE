const postsContainer = document.getElementById("posts");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

let currentPage = 1;
const limit = 10;
const totalPosts = 100; 
const totalPages = Math.ceil(totalPosts / limit);

async function fetchPosts(page) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
    const data = await response.json();
    displayPosts(data);
    updateButtons();
}

function displayPosts(posts) {
    postsContainer.innerHTML = "";
    posts.forEach(post => {
        const div = document.createElement("div");
        div.className = "post";
        div.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
        postsContainer.appendChild(div);
    });
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

function updateButtons() {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        fetchPosts(currentPage);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        fetchPosts(currentPage);
    }
});

// Initial load
fetchPosts(currentPage);