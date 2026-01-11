async function convert() {
      const amount = document.getElementById("amount").value;
      const from = document.getElementById("from").value;
      const to = document.getElementById("to").value;

      const apiKey = "6b792222aee805861a794fcb";
      const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`;

      const response = await fetch(url);
      const data = await response.json();

      const rate = data.conversion_rates[to];
      const converted = (amount * rate).toFixed(2);

      document.getElementById("result").innerText =
        `${amount} ${from} = ${converted} ${to}`;
    }