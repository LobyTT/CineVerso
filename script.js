/* =========================================================
   CINEVERSE — JAVASCRIPT
   ========================================================= */


/* =========================================================
   BANCO DE FILMES
   ========================================================= */

const movies = [
  {
    id: 1,
    title: "Interestelar",
    year: 2014,
    genre: "Ficção científica",
    director: "Christopher Nolan",
    cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    rating: 4.8,
    duration: "2h 49min",
    budget: "US$ 165 milhões",
    box: "US$ 731 milhões",
    age: "10 anos",
    writer: "Jonathan Nolan, Christopher Nolan",
    c1: "#071c39",
    c2: "#168cff",
    icon: "🌌",
    trailer:
      "https://www.youtube.com/results?search_query=Interstellar+official+trailer",
    behind:
      "https://www.youtube.com/results?search_query=Interstellar+behind+the+scenes",
    sound:
      "https://open.spotify.com/search/Interstellar%20soundtrack"
  },

  {
    id: 2,
    title: "O Poderoso Chefão",
    year: 1972,
    genre: "Drama",
    director: "Francis Ford Coppola",
    cast: "Marlon Brando, Al Pacino, James Caan",
    rating: 4.9,
    duration: "2h 55min",
    budget: "US$ 6 milhões",
    box: "US$ 250 milhões",
    age: "16 anos",
    writer: "Mario Puzo, Francis Ford Coppola",
    c1: "#351509",
    c2: "#b86d28",
    icon: "🎩",
    trailer:
      "https://www.youtube.com/results?search_query=The+Godfather+official+trailer",
    behind:
      "https://www.youtube.com/results?search_query=The+Godfather+behind+the+scenes",
    sound:
      "https://open.spotify.com/search/The%20Godfather%20soundtrack"
  },

  {
    id: 3,
    title: "Homem-Aranha: No Aranhaverso",
    year: 2018,
    genre: "Animação",
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    cast: "Shameik Moore, Jake Johnson, Hailee Steinfeld",
    rating: 4.7,
    duration: "1h 57min",
    budget: "US$ 90 milhões",
    box: "US$ 384 milhões",
    age: "10 anos",
    writer: "Phil Lord, Rodney Rothman",
    c1: "#390a62",
    c2: "#ec1b69",
    icon: "🕷️",
    trailer:
      "https://www.youtube.com/results?search_query=Spider-Man+Into+the+Spider-Verse+official+trailer",
    behind:
      "https://www.youtube.com/results?search_query=Spider-Verse+behind+the+scenes",
    sound:
      "https://open.spotify.com/search/Spider-Verse%20soundtrack"
  },

  {
    id: 4,
    title: "Batman: O Cavaleiro das Trevas",
    year: 2008,
    genre: "Ação",
    director: "Christopher Nolan",
    cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
    rating: 4.9,
    duration: "2h 32min",
    budget: "US$ 185 milhões",
    box: "US$ 1 bilhão",
    age: "12 anos",
    writer: "Jonathan Nolan, Christopher Nolan",
    c1: "#090d14",
    c2: "#334e68",
    icon: "🦇",
    trailer:
      "https://www.youtube.com/results?search_query=Dark+Knight+official+trailer",
    behind:
      "https://www.youtube.com/results?search_query=Dark+Knight+behind+the+scenes",
    sound:
      "https://open.spotify.com/search/Dark%20Knight%20soundtrack"
  },

  {
    id: 5,
    title: "Parasita",
    year: 2019,
    genre: "Suspense",
    director: "Bong Joon Ho",
    cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
    rating: 4.8,
    duration: "2h 12min",
    budget: "US$ 11,4 milhões",
    box: "US$ 258 milhões",
    age: "16 anos",
    writer: "Bong Joon Ho, Han Jin-won",
    c1: "#142f27",
    c2: "#4d9a74",
    icon: "🏠",
    trailer:
      "https://www.youtube.com/results?search_query=Parasite+2019+official+trailer",
    behind:
      "https://www.youtube.com/results?search_query=Parasite+behind+the+scenes",
    sound:
      "https://open.spotify.com/search/Parasite%20soundtrack"
  },

  {
    id: 6,
    title: "Cidade de Deus",
    year: 2002,
    genre: "Crime",
    director: "Fernando Meirelles, Kátia Lund",
    cast: "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen",
    rating: 4.8,
    duration: "2h 10min",
    budget: "R$ 8 milhões",
    box: "US$ 30 milhões",
    age: "18 anos",
    writer: "Bráulio Mantovani",
    c1: "#3b180a",
    c2: "#d97926",
    icon: "🎥",
    trailer:
      "https://www.youtube.com/results?search_query=Cidade+de+Deus+trailer",
    behind:
      "https://www.youtube.com/results?search_query=Cidade+de+Deus+making+of",
    sound:
      "https://open.spotify.com/search/Cidade%20de%20Deus%20soundtrack"
  },

  {
    id: 7,
    title: "O Senhor dos Anéis: O Retorno do Rei",
    year: 2003,
    genre: "Fantasia",
    director: "Peter Jackson",
    cast: "Elijah Wood, Ian McKellen, Viggo Mortensen",
    rating: 4.9,
    duration: "3h 21min",
    budget: "US$ 94 milhões",
    box: "US$ 1,14 bilhão",
    age: "12 anos",
    writer: "Fran Walsh, Philippa Boyens, Peter Jackson",
    c1: "#173d32",
    c2: "#9a722d",
    icon: "💍",
    trailer:
      "https://www.youtube.com/results?search_query=Return+of+the+King+official+trailer",
    behind:
      "https://www.youtube.com/results?search_query=Lord+of+the+Rings+behind+the+scenes",
    sound:
      "https://open.spotify.com/search/Return%20of%20the%20King%20soundtrack"
  },

  {
    id: 8,
    title: "Whiplash",
    year: 2014,
    genre: "Drama",
    director: "Damien Chazelle",
    cast: "Miles Teller, J.K. Simmons, Melissa Benoist",
    rating: 4.6,
    duration: "1h 47min",
    budget: "US$ 3,3 milhões",
    box: "US$ 49 milhões",
    age: "12 anos",
    writer: "Damien Chazelle",
    c1: "#171717",
    c2: "#a22b2b",
    icon: "🥁",
    trailer:
      "https://www.youtube.com/results?search_query=Whiplash+official+trailer",
    behind:
      "https://www.youtube.com/results?search_query=Whiplash+behind+the+scenes",
    sound:
      "https://open.spotify.com/search/Whiplash%20soundtrack"
  }
];


/* =========================================================
   ELEMENTOS DO DOM
   ========================================================= */

const $ = (selector) => document.querySelector(selector);

const search = $("#search");
const genre = $("#genre");
const year = $("#year");
const director = $("#director");
const rating = $("#rating");

const movieGrid = $("#movieGrid");
const resultCount = $("#resultCount");
const empty = $("#empty");

const modal = $("#modal");
const modalContent = $("#modalContent");
const closeModal = $("#closeModal");

const listsGrid = $("#listsGrid");
const newListBtn = $("#newListBtn");
const toastElement = $("#toast");


/* =========================================================
   DADOS SALVOS NO NAVEGADOR
   ========================================================= */

let userRatings = JSON.parse(
  localStorage.getItem("cineverseRatings") || "{}"
);

let lists = JSON.parse(
  localStorage.getItem("cineverseLists") ||
  '["Favoritos", "Para Assistir no Fim de Semana"]'
);


/* =========================================================
   POPULAR FILTROS
   ========================================================= */

function populateFilters() {

  // Gêneros
  const genres = [...new Set(
    movies.map((movie) => movie.genre)
  )].sort();

  genres.forEach((item) => {
    genre.innerHTML += `
      <option value="${item}">
        ${item}
      </option>
    `;
  });


  // Anos
  const years = [...new Set(
    movies.map((movie) => movie.year)
  )].sort((a, b) => b - a);

  years.forEach((item) => {
    year.innerHTML += `
      <option value="${item}">
        ${item}
      </option>
    `;
  });


  // Diretores
  const directors = [...new Set(
    movies.map((movie) => movie.director)
  )].sort();

  directors.forEach((item) => {
    director.innerHTML += `
      <option value="${item}">
        ${item}
      </option>
    `;
  });
}


/* =========================================================
   FILTRAR FILMES
   ========================================================= */

function getFilteredMovies() {

  const query = search.value
    .trim()
    .toLowerCase();

  const minimumRating =
    Number(rating.value) || 0;


  return movies.filter((movie) => {

    const searchableText = [
      movie.title,
      movie.director,
      movie.cast,
      movie.genre
    ]
      .join(" ")
      .toLowerCase();


    const matchesSearch =
      !query ||
      searchableText.includes(query);

    const matchesGenre =
      !genre.value ||
      movie.genre === genre.value;

    const matchesYear =
      !year.value ||
      movie.year === Number(year.value);

    const matchesDirector =
      !director.value ||
      movie.director === director.value;

    const matchesRating =
      movie.rating >= minimumRating;


    return (
      matchesSearch &&
      matchesGenre &&
      matchesYear &&
      matchesDirector &&
      matchesRating
    );
  });
}


/* =========================================================
   RENDERIZAR CATÁLOGO
   ========================================================= */

function renderMovies() {

  const filteredMovies = getFilteredMovies();


  // Contador
  resultCount.textContent =
    `${filteredMovies.length} filme${
      filteredMovies.length !== 1 ? "s" : ""
    }`;


  // Estado vazio
  empty.classList.toggle(
    "hidden",
    filteredMovies.length > 0
  );


  // Cards
  movieGrid.innerHTML = filteredMovies
    .map((movie) => {

      const formattedRating =
        movie.rating
          .toFixed(1)
          .replace(".", ",");


      return `
        <article
          class="movie-card"
          data-movie-id="${movie.id}"
          tabindex="0"
          role="button"
          aria-label="Abrir detalhes de ${movie.title}"
        >

          <button
            class="list-btn"
            type="button"
            data-list-id="${movie.id}"
            aria-label="Adicionar ${movie.title} à lista"
          >
            ＋
          </button>

          <div
            class="poster"
            style="--c1:${movie.c1}; --c2:${movie.c2}"
          >
            ${movie.icon}
          </div>

          <div class="movie-info">

            <h3>${movie.title}</h3>

            <div class="meta">
              ${movie.year} • ${movie.genre}
            </div>

            <div class="score">
              ★ ${formattedRating}
            </div>

          </div>

        </article>
      `;
    })
    .join("");
}


/* =========================================================
   ABRIR DETALHES DO FILME
   ========================================================= */

function openMovie(id) {

  const movie = movies.find(
    (item) => item.id === id
  );

  if (!movie) {
    return;
  }


  const userRating =
    userRatings[id] || 0;


  modalContent.innerHTML = `
    <div class="detail">

      <div
        class="detail-poster"
        style="--c1:${movie.c1}; --c2:${movie.c2}"
      >
        ${movie.icon}
      </div>


      <div>

        <p class="eyebrow">
          ${movie.year} • ${movie.genre}
        </p>

        <h2>
          ${movie.title}
        </h2>

        <p>
          ${movie.cast}
        </p>


        <div class="facts">

          <div class="fact">
            <b>Direção</b>
            ${movie.director}
          </div>

          <div class="fact">
            <b>Roteiro</b>
            ${movie.writer}
          </div>

          <div class="fact">
            <b>Duração</b>
            ${movie.duration}
          </div>

          <div class="fact">
            <b>Classificação</b>
            ${movie.age}
          </div>

          <div class="fact">
            <b>Orçamento</b>
            ${movie.budget}
          </div>

          <div class="fact">
            <b>Bilheteria</b>
            ${movie.box}
          </div>

        </div>


        <strong>
          Sua avaliação
        </strong>


        <div
          class="stars"
          aria-label="Avalie este filme"
        >
          ${[1, 2, 3, 4, 5]
            .map((number) => `
              <button
                class="star ${
                  number <= userRating
                    ? "active"
                    : ""
                }"
                type="button"
                data-rating="${number}"
                data-movie-rating="${movie.id}"
                aria-label="${number} estrela${
                  number > 1 ? "s" : ""
                }"
              >
                ★
              </button>
            `)
            .join("")}
        </div>


        <div class="media">

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="${movie.trailer}"
          >
            ▶ Trailer oficial
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="${movie.behind}"
          >
            🎬 Bastidores
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="${movie.sound}"
          >
            🎵 Trilha sonora
          </a>

        </div>

      </div>

    </div>
  `;


  modal.classList.remove("hidden");

  // Evita rolagem da página enquanto o modal está aberto
  document.body.style.overflow = "hidden";
}


/* =========================================================
   FECHAR MODAL
   ========================================================= */

function closeMovieModal() {

  modal.classList.add("hidden");

  // Libera novamente a rolagem
  document.body.style.overflow = "";
}


/* =========================================================
   AVALIAR FILME
   ========================================================= */

function rateMovie(id, ratingValue) {

  userRatings[id] = ratingValue;

  localStorage.setItem(
    "cineverseRatings",
    JSON.stringify(userRatings)
  );


  openMovie(id);

  showToast("Avaliação salva!");
}


/* =========================================================
   ADICIONAR FILME À LISTA
   ========================================================= */

function addToList(id) {

  const movie = movies.find(
    (item) => item.id === id
  );

  if (!movie) {
    return;
  }


  // Caso não exista nenhuma lista
  if (!lists.length) {
    lists = ["Favoritos"];

    localStorage.setItem(
      "cineverseLists",
      JSON.stringify(lists)
    );

    renderLists();
  }


  showToast(
    `"${movie.title}" adicionado à lista "${lists[0]}"`
  );
}


/* =========================================================
   RENDERIZAR LISTAS
   ========================================================= */

function renderLists() {

  listsGrid.innerHTML = lists
    .map((list, index) => {

      const description =
        index === 0
          ? "Sua seleção pessoal de filmes favoritos."
          : "Filmes escolhidos para assistir depois.";


      return `
        <div class="list-card">

          <h3>
            ${list}
          </h3>

          <p>
            ${description}
          </p>

          <div class="mini-posters">
            <span class="mini">🎬</span>
            <span class="mini">⭐</span>
            <span class="mini">🍿</span>
          </div>

        </div>
      `;
    })
    .join("");
}


/* =========================================================
   CRIAR NOVA LISTA
   ========================================================= */

function createNewList() {

  const name = prompt(
    "Nome da nova lista:"
  );


  if (!name || !name.trim()) {
    return;
  }


  lists.push(name.trim());


  localStorage.setItem(
    "cineverseLists",
    JSON.stringify(lists)
  );


  renderLists();

  showToast("Nova lista criada!");
}


/* =========================================================
   SISTEMA DE NOTIFICAÇÃO
   ========================================================= */

function showToast(message) {

  toastElement.textContent = message;

  toastElement.classList.add("show");


  clearTimeout(showToast.timeout);


  showToast.timeout = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 2200);
}


/* =========================================================
   EVENTOS DOS FILTROS
   ========================================================= */

[
  search,
  genre,
  year,
  director,
  rating
].forEach((element) => {

  element.addEventListener(
    "input",
    renderMovies
  );

  element.addEventListener(
    "change",
    renderMovies
  );
});


/* =========================================================
   EVENTOS DO CATÁLOGO
   ========================================================= */

movieGrid.addEventListener(
  "click",
  (event) => {

    // Botão de adicionar à lista
    const listButton =
      event.target.closest(".list-btn");

    if (listButton) {

      const movieId =
        Number(listButton.dataset.listId);

      addToList(movieId);

      return;
    }


    // Card do filme
    const movieCard =
      event.target.closest(".movie-card");

    if (movieCard) {

      const movieId =
        Number(movieCard.dataset.movieId);

      openMovie(movieId);
    }
  }
);


/* =========================================================
   ACESSIBILIDADE DO CATÁLOGO
   ========================================================= */

movieGrid.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key !== "Enter" &&
      event.key !== " "
    ) {
      return;
    }


    const movieCard =
      event.target.closest(".movie-card");

    if (!movieCard) {
      return;
    }


    event.preventDefault();


    const movieId =
      Number(movieCard.dataset.movieId);

    openMovie(movieId);
  }
);


/* =========================================================
   EVENTOS DO MODAL
   ========================================================= */

// Botão X
closeModal.addEventListener(
  "click",
  closeMovieModal
);


// Clicar fora da caixa
modal.addEventListener(
  "click",
  (event) => {

    if (event.target === modal) {
      closeMovieModal();
    }
  }
);


// Tecla ESC
document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      !modal.classList.contains("hidden")
    ) {
      closeMovieModal();
    }
  }
);


/* =========================================================
   EVENTOS DAS ESTRELAS
   ========================================================= */

modalContent.addEventListener(
  "click",
  (event) => {

    const star =
      event.target.closest(".star");

    if (!star) {
      return;
    }


    const movieId =
      Number(star.dataset.movieRating);

    const ratingValue =
      Number(star.dataset.rating);


    rateMovie(
      movieId,
      ratingValue
    );
  }
);


/* =========================================================
   NOVA LISTA
   ========================================================= */

newListBtn.addEventListener(
  "click",
  createNewList
);


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

function init() {

  populateFilters();

  renderMovies();

  renderLists();
}


// Inicia o CineVerse
init();
