// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios
  .get("https://lambda-times-backend45.herokuapp.com/articles")
  .then((response) => {
    console.log("yay!", response.data.articles);
    let article = response.data.articles;

    console.log(Object.values(article)[0]);

    const newArticle = Object.values(article);
    newArticle.forEach((element) => {
      element.forEach((newElement) => {
        cardMaker(newElement);
      });
      // console.log('element',element)
    });
    // article.bootstrap.forEach((item) => {
    //   cardMaker(item);
    // });
    // article.javascript.forEach((item) => {
    //   cardMaker(item);
    // });
    // article.jquery.forEach((item) => {
    //   cardMaker(item);
    // });
    // article.node.forEach((item) => {
    //   cardMaker(item);
    // });
    // article.technology.forEach((item) => {
    //   cardMaker(item);
    // });
  })
  .catch((err) => {
    const alert = document.createElement("h1");
    alert.textContent = "Error! Articles failed to load.";
    console.log(alert);
    const alertEntry = document.querySelector(".errors-container");
    alertEntry.appendChild(alert);
    // alert("Articles failed to load!", err);
  });

const entryPoint = document.querySelector(".cards-container");

const cardMaker = (article) => {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(img);

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = article.headline;
  img.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  entryPoint.appendChild(card);
  card.addEventListener("click", () => {
    console.log(headline.textContent);
  });
};
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
