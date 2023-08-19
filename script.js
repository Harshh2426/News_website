let header = document.querySelector(".header");
let iconbtn = document.querySelector(".icon-box");
iconbtn.addEventListener("click", () => {
  header.classList.toggle("active");
});

const apiKey = "32eddb4b5fe9391536c9aff55b034b37";
const url = "https://gnews.io/api/v4/search?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload(){r
    window.location.reload();
}

async function fetchNews(query) {
  const res = await fetch(`${url}${query}&lang=en&country=in&apikey=${apiKey}`);
  const data = await res.json();
  // console.log(data);
  bindData(data.articles);
}

function bindData(articles) {
  const cardContainer = document.getElementById("cards-container");
  const newsCardTemplate = document.getElementById("template-news-card");
  cardContainer.innerHTML = "";
  articles.forEach((article) => {
    if (!article.image) return;
    const cardClone = newsCardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone, article);
    cardContainer.appendChild(cardClone);
  });
}

function fillDataInCard(cardClone, article) {
  const newsImg = cardClone.querySelector("#news-img");
  const newsTitle = cardClone.querySelector("#news-title");
  const newsSource = cardClone.querySelector("#news-source");
  const newsDesc = cardClone.querySelector("#news-desc");

  newsImg.src = article.image;
  newsTitle.innerHTML = article.title;
  newsDesc.innerHTML = article.description;
  const date = article.publishedAt;
  newsSource.innerHTML = `${article.source.name} → ${date.toLocaleString()}`;
}

let card=document.querySelector('.card');
card.style.background="red";

let searchData = document.querySelector(".form");
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  let querySearch = searchData.value;
  fetchNews(querySearch);
  if (header.classList.contains("active")) {
    header.classList.toggle("active");
  }
});
function newsNavbar(id) {
  fetchNews(id);
}
