const startBtn = document.getElementById("start");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    window.location.href = "movie.html";
  });
}

if (window.location.pathname.includes("movie.html")) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODE1NjlmYjFjNWFjY2EwZmRjMjNiYTdjNTc2ZjZlYSIsIm5iZiI6MTc3NzY1NjI4Ni42NzYsInN1YiI6IjY5ZjRlMWRlMWFmZGYxYzI2OTgyMzZkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hBlJrmm9bKAWksEaK0MDNriyDK3-22K46QPe_LSq-iQ",
    },
  };

  fetch("https://api.themoviedb.org/3/movie/popular", options)
    .then((res) => res.json())
    .then((res) => {
      const movieList = res.results;
      const container = document.getElementById("movie-container");

      movieList.forEach((movie) => {
        const card = document.createElement("div");
        card.className = "movie-card";

        const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        card.innerHTML = `
          <img src="${imgUrl}" alt="${movie.title}">
          <div class="movieInfo">
            <h4>${movie.title}</h4>
            <p>평점: ${movie.vote_average}</p>
            <p>개봉일: ${movie.release_date}</p>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch((error) => console.error("에러 발생:",error));
}
