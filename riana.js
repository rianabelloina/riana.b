let photos = [
    "https://www.kultplus.com/wp-content/uploads/2025/07/back-in-action-728x430.jpg",
    "https://businessmag.al/5-nga-filmat-me-te-shikuar-ne-netflix-per-2024/mv5bodrimta4ngmtotqzzc00owfjlwfmodctmjy2ztcwyji5ndmyxkeyxkfqcgdeqxvymdc5odizmw-_v1_fmjpg_ux1000_.jpg",
    "https://i.ytimg.com/vi/MV2nYw6gL_w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA5diMPCXpNM5YZa73p2h2S1zaeWg"
];

let index = 0;

// Image slider
setInterval(() => {
    index = (index + 1) % photos.length;
    document.getElementById("slideimg").src = photos[index];
}, 3000);

// Clock
setInterval(() => {
    document.getElementById("clock").innerText = new Date().toLocaleTimeString();
}, 1000);

// Dark mode toggle
document.getElementById("modeBTN").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Example API (you can replace this with a real one)
const API = "https://api.tvmaze.com/search/shows?q=";

// Movie search
document.getElementById("searchbtn").addEventListener("click", getMovies);

function getMovies() {
    let query = document.getElementById("searchinput").value.trim();
    if (!query) return;

    fetch(API + encodeURIComponent(query))
        .then(res => res.json())
        .then(data => {
            let moviesDiv = document.getElementById("movies");
            moviesDiv.innerHTML = "";

            data.forEach(item => {
                moviesDiv.innerHTML += `
                    <div class="movie">
                        <img src="${item.show.image?.medium || ''}" width="100%">
                        <h3>${item.show.name}</h3>
                        <p>${item.show.summary ? item.show.summary.slice(0, 100) : "Pa përshkrim"}</p>
                    </div>
                `;
            });
        })
        .catch(err => {
            console.error("Gabim gjatë marrjes së të dhënave:", err);
        });
    }