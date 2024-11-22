// cards.js

function generateCard(src, title, text, url, link_text, img_alt) {
    return `
      <div class="col-md-6 col-xl-4 mb-4">
        <div class="card" style="width: 18rem;">
          <img src="${src}" class="card-img-top" alt="${img_alt}">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${text}</p>
            <a href="${url}" class="btn btn-primary">${link_text}</a>
          </div>
        </div>
      </div>
    `;
  }
  
  function renderCards(cards) {
    let container = document.getElementById("card-container");
    cards.forEach(card => {
      container.innerHTML += generateCard(card.src, card.title, card.text, card.url, card.link_text, card.img_alt);
    });
  }
  