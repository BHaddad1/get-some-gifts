let allData;
const displayArea = document.getElementById("body");
const totalDisplay = document.querySelector(".total-cost");

fetch("http://localhost:3001/items")
  .then((res) => res.json())
  .then((data) => {
    allData = data;
    displayData();
  });

function displayData() {
  allData.forEach((data) => {
    displayArea.innerHTML += `
           <tr id="display-area">
             <td id="recipient">${data.recipient}</td>
              <td id="item">${data.name}</td>
              <td id="price">$${data.priceInDollars}</td>
              <td><input type="checkbox"></td>
            </tr>`;
  });
  const total = allData.reduce((acc, cur) => {
    acc += cur.priceInDollars;
    return acc;
  }, 0);
  totalDisplay.innerText = `Total Cost of Gifts: ${total}`;
}
