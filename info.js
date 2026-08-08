const items = [
    {
        id: "dc",

        title: "DC (2026)",

        image: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=900&q=80",

        description:
            "Information about DC (2026), including languages, quality options and other details.",

        genre: "Superhero",

        year: "2026",

        status: "Upcoming",

        links: [
            {
                quality: "Hindi (Clean) + Tamil",
                resolution: "480p",
                size: "550MB",
                url: "#"
            },

            {
                quality: "Hindi (Clean) + Tamil",
                resolution: "720p",
                size: "1.2GB",
                url: "#"
            },

            {
                quality: "Hindi (Clean) + Tamil",
                resolution: "1080p",
                size: "2.4GB",
                url: "#"
            },

            {
                quality: "Hindi (Clean) + Tamil",
                resolution: "1080p HQ",
                size: "10.4GB",
                url: "#"
            }
        ]
    },


    {
        id: "spiderman",

        title: "Spider-Man: Brand New Day",

        image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=900&q=80",

        description:
            "Latest information about Spider-Man: Brand New Day.",

        genre: "Superhero",

        year: "2026",

        status: "Upcoming",

        links: []
    },


    {
        id: "supergirl",

        title: "Supergirl",

        image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=900&q=80",

        description:
            "Latest information about Supergirl.",

        genre: "Superhero",

        year: "2026",

        status: "Upcoming",

        links: []
    },


    {
        id: "gatta-kusthi-2",

        title: "Gatta Kusthi 2",

        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80",

        description:
            "Latest information about Gatta Kusthi 2.",

        genre: "Sports",

        year: "2026",

        status: "Upcoming",

        links: []
    },


    {
        id: "ohh-my-dog",

        title: "Ohh My Dog",

        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",

        description:
            "Latest information about Ohh My Dog.",

        genre: "Drama",

        year: "2026",

        status: "Available",

        links: []
    }
];



/* =========================
   GET MOVIE ID
========================= */

const params = new URLSearchParams(
    window.location.search
);

const id = params.get("id");

const item = items.find(
    movie => movie.id === id
);

const infoPage =
    document.getElementById("infoPage");



/* =========================
   MOVIE NOT FOUND
========================= */

if (!item) {

    infoPage.innerHTML = `

        <div class="not-found">

            <h1>Item Not Found</h1>

            <p>
                The requested page could not be found.
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



/* =========================
   DISPLAY MOVIE
========================= */

else {

    document.title =
        `${item.title} - MediaHub`;


    /* =========================
       DOWNLOAD / QUALITY LIST
    ========================= */

    let linksHTML = "";


    if (item.links.length > 0) {

        linksHTML = `

            <section class="download-section">

                <h2>Available Versions</h2>

                <div class="download-list">

                    ${item.links.map(link => `

                        <div class="download-item">

                            <div class="download-title">

                                ${item.title}

                                <span>
                                    [${link.quality}]
                                </span>

                                ${link.resolution}

                                <b>
                                    [${link.size}]
                                </b>

                            </div>


                            <a
                                href="${link.url}"
                                class="download-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <span>⇩</span>

                                DOWNLOAD LINKS

                                <span>⇩</span>

                            </a>

                        </div>

                    `).join("")}

                </div>

            </section>

        `;

    }


    /* =========================
       COMPLETE INFO PAGE
    ========================= */

    infoPage.innerHTML = `

        <div class="info-container">


            <!-- POSTER -->

            <div>

                <img
                    class="info-poster"
                    src="${item.image}"
                    alt="${item.title}"
                >

            </div>



            <!-- DETAILS -->

            <div class="info-details">

                <h1>
                    ${item.title}
                </h1>


                <div class="info-meta">

                    <span class="badge">
                        ${item.genre}
                    </span>

                    <span class="badge">
                        ${item.year}
                    </span>

                    <span class="badge">
                        ${item.status}
                    </span>

                </div>


                <p>
                    ${item.description}
                </p>


                <a
                    href="index.html"
                    class="back-btn"
                >
                    ← Back
                </a>

            </div>

        </div>


        ${linksHTML}

    `;

}



/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


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



/* =========================
   SEARCH
========================= */

const searchInput =
    document.getElementById(
        "searchInput"
    );

const searchBtn =
    document.getElementById(
        "searchBtn"
    );


function performSearch() {

    const search =
        searchInput.value.trim();


    if (search === "") {

        window.location.href =
            "index.html";

        return;

    }


    window.location.href =
        `index.html?search=${encodeURIComponent(search)}`;

}


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        performSearch
    );

}


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                performSearch();

            }

        }
    );

}
