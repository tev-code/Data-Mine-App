const form = document.getElementById("data-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = document.getElementById("data-input").value;
    fetch("/submit-data", {
        method: "POST",
        body: JSON.stringify({ data }),
        headers: { "Content-Type": "application/json" }
    });
});

const dataContainer = document.getElementById("data-container");
const averageContainer = document.getElementById("average");
fetch("/get-data")
  .then((response) => response.json())
  .then((data) => {
    let dataHtml = "";
    data.forEach((d) => {
      dataHtml += `<div>${d.data}</div>`;
    });
    dataContainer.innerHTML = dataHtml;
  });

fetch("/analyze-data")
  .then((response) => response.json())
  .then((data) => {
    averageContainer.innerHTML = data.average;
  });
