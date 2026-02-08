const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    msg.style.color = "blue";
    msg.innerText = "Processing...";
    try {
        const response = await axios.post("https://reqres.in/api/login", {
            email: email,
            password: password
         }, {
                headers: {
                    "x-api-key": "pub_1e4baa2066948a5aa7f685eb7bec6041ce66391e06664db25fc0360a4d1e8113"
                }
            });
        msg.style.color = "green";
        msg.innerText = "Login success ✅ Token: " + response.data.token;

    } catch (error) {
        msg.style.color = "red";
        if (error.response) {
            msg.innerText = "Error: " + error.response.data.error;
        } else {
            msg.innerText = "Browser Blocked Request ❌ Read below to fix!";
        }
    }
});