// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(todaysDate, temperature) {
  const header = document.createElement("div");
  const date = document.createElement("span");
  const headline = document.createElement("h1");
  const temp = document.createElement("span");

  const container = document.querySelector(".header-container");

  container.appendChild(header);
  header.appendChild(date);
  header.appendChild(headline);
  header.appendChild(temp);

  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  date.textContent = todaysDate;
  headline.textContent = "Lambda Times";
  temp.textContent = temperature;

}

// let todaysDate = "07/18/20";
// let temperature = " 67F";
Header("07/18/20", "67F");
