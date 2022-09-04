//  https://picsum.photos/v2/list

const cardsGrid = document.querySelector(".cards-grid");
const cards = document.querySelectorAll(".card");
const fakeResult = `
<div class="fade-result">
    <p>Connexion Impossible</p>
    <div class="refresh">
        <img src="./assets/img/refresh.svg" alt="Refresh">
    </div>
    <button>Veuillez Ressayer</button>
</div>`;
const loadContent = async () => {
  const response = await fetch("https://picsum.photos/v2/list");
  const responseData = await response.json();
  if (response && response.ok && response.status === 200) {
    createCards(responseData);
  } else {
    cardsGrid.innerHTML = fakeResult;
  }
};

function createCards(data) {
  console.log(data);
  let cardList = "";
  for (let i = 0; i < cards.length; i++) {
    cards.forEach((item) => item.classList.remove("is-loading"));
    const { id, url, author, download_url } = data[i];
    const newCard = `
    <div class="card loaded">
        <img class="card-img" src=${download_url} alt=${author + id}/>
        <div class="card-content">
            <h3 class="title card-title">${author}</h3>
            <p class="text card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id perferendis</p>
            <p class="text">Lorem ipsum</p>
            <p class="text">${author}</p>
        </div>
    </div>`;
    cardList += newCard;
  }
  cardsGrid.innerHTML = cardList;
}
loadContent();
