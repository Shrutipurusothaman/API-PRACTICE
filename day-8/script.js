const userNameInput = document.getElementById("username");
const submitButton = document.getElementById("submit");
const result = document.getElementById("userResult");

submitButton.addEventListener('click', () => {
    const username = userNameInput.value.trim();
    if (username !== "") {
        getGithubUser(username);
    }
});

async function getGithubUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error("User not found");
        }
        const userData = await response.json();
        result.innerHTML = `<h3>${userData.name || "No name provided"}</h3>
      <p>Username: ${userData.login}</p>
      <p>Followers: ${userData.followers}</p>
      <p>Public Repos: ${userData.public_repos}</p>
      <a href="${userData.html_url}" target="_blank">View Profile</a>
    `;

    } catch (error) {
        result.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}

