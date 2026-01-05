async function userdata() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Network no response");
    }
    const data = await response.json();
    const persons = document.getElementById("users");
    let tableHTML=`
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
    `;
    data.forEach(user => {
      tableHTML += `
        <tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
        </tr>
      `;
    });
    tableHTML += `</table>`; 
    persons.innerHTML = tableHTML;

  } catch (error) {
    console.log("error", error);
  }
}

userdata();
