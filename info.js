const movies = {

    "dc": {

        title: "DC (2026)",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDw_6scwls8bOQxyCxM7ksDRUs-svwvbZXr016NFd9g&s=10",

        description:
            "DC (2026) movie information, available qualities, languages and other details.",

        genre: "Superhero",

        year: "2026",

        status: "Released",

        versions: [

            {
                quality: "Hindi (Clean) + Tamil",
                resolution: "480p",
                size: "550MB",
                link: "https://shrtslug.biz/DC480p"
            },

            {
                quality: "Hindi (Clean) + Tamil",
                resolution: "720p",
                size: "1.2GB",
                link: "https://shrtslug.biz/DC720p"
            },

            {
                quality: "Hindi (Clean) + Tamil",
                resolution: "1080p",
                size: "2.4GB",
                link: "https://shrtslug.biz/DC1080"
            },

            {
                quality: "Hindi (Clean) + Tamil",
                resolution: "1080p HQ",
                size: "10.4GB",
                link: "https://shrtslug.biz/DC1080HQ"
            }

        ]

    },


    "spiderman": {

        title: "Spider-Man: Brand New Day",

        image:
            "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=900&q=80",

        description:
            "Latest information about Spider-Man: Brand New Day.",

        genre: "Superhero",

        year: "2026",

        status: "Upcoming",

        versions: []

    },


    "supergirl": {

        title: "Supergirl",

        image:
            "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=900&q=80",

        description:
            "Latest information about Supergirl.",

        genre: "Superhero",

        year: "2026",

        status: "Upcoming",

        versions: []

    }

};



/* =================================
   GET ID FROM URL
================================= */

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const movieId =
    urlParams.get("id");


console.log("Movie ID:", movieId);



/* =================================
   FIND MOVIE
================================= */

const movie =
    movies[movieId];


const infoPage =
    document.getElementById(
        "infoPage"
    );



/* =================================
   MOVIE NOT FOUND
================================= */

if (!movie) {

    infoPage.innerHTML = `

        <div class="not-found">

            <h1>
                Movie Not Found
            </h1>

            <p>
                No movie was found for:
                ${movieId || "unknown"}
            </p>

            <br>

            <a
                href="index.html"
                class="back-btn"
            >
                ← Back Home
            </a>

        </div>

    `;

}



/* =================================
   SHOW MOVIE
================================= */

else {

    document.title =
        movie.title + " - MediaHub";


    /* Movie information */

    let html = `

        <div class="info-container">


            <div>

                <img
                    src="${movie.image}"
                    alt="${movie.title}"
                    class="info-poster"
                >

            </div>



            <div class="info-details">

                <h1>
                    ${movie.title}
                </h1>


                <div class="info-meta">

                    <span class="badge">
                        ${movie.genre}
                    </span>

                    <span class="badge">
                        ${movie.year}
                    </span>

                    <span class="badge">
                        ${movie.status}
                    </span>

                </div>


                <p>
                    ${movie.description}
                </p>


                <a
                    href="index.html"
                    class="back-btn"
                >
                    ← Back
                </a>

            </div>

        </div>

    `;



    /* =================================
       VERSION / DOWNLOAD SECTION
    ================================= */

    if (
        movie.versions &&
        movie.versions.length > 0
    ) {

        html += `

            <section class="download-section">

                <h2>
                    Available Versions
                </h2>


                <div class="download-list">

        `;


        movie.versions.forEach(
            version => {

                html += `

                    <div
                        class="download-item"
                    >

                        <div
                            class="download-title"
                        >

                            ${movie.title}

                            <span>
                                [${version.quality}]
                            </span>

                            ${version.resolution}

                            <b>
                                [${version.size}]
                            </b>

                        </div>


                        <a
                            href="${version.link}"
                            class="download-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <span>
                                ↓
                            </span>

                            DOWNLOAD LINKS

                            <span>
                                ↓
                            </span>

                        </a>

                    </div>

                `;

            }
        );


        html += `

                </div>

            </section>

        `;

    }



    /* Put everything on page */

    infoPage.innerHTML = html;

}



/* =================================
   MOBILE MENU
================================= */

const menuBtn =
    document.getElementById(
        "menuBtn"
    );


const navMenu =
    document.getElementById(
        "navMenu"
    );


if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "active"
            );

        }
    );

}



/* =================================
   SEARCH
================================= */

const searchInput =
    document.getElementById(
        "searchInput"
    );


const searchBtn =
    document.getElementById(
        "searchBtn"
    );


function searchMovie() {

    const query =
        searchInput.value.trim();


    if (query === "") {

        window.location.href =
            "index.html";

        return;

    }


    window.location.href =
        "index.html?search=" +
        encodeURIComponent(query);

}


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        searchMovie
    );

}


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                searchMovie();

            }

        }
    );

}
