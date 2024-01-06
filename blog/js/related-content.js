const content = [
    {
        title: "12 SEO tips om hoog te scoren in Google",
        tag: "seo",
        body: "",
        img: "/blog/12-seo-tips-om-te-scoren-in-google/img/banner.jpg",
        url: "/blog/12-seo-tips-om-te-scoren-in-google/"
    },
    {
        title: "Maak een website in 4 stappen",
        tag: "website-development",
        body: "",
        img: "/blog/website-stappenplan/img/banner.jpg",
        url: "/blog/website-stappenplan/"
    },
    {
        title: "Een online kalender integreren in jouw website",
        tag: "website-development",
        body: "",
        img: "/blog/online-kalender-website/img/banner.jpg",
        url: "/blog/online-kalender-website/"
    },
    // {
    //     title: "",
    //     tag: "",
    //     body: "",
    //     img: "/blog/",
    //     url: "/blog/"
    // },
];

function createCards(e) {
    const target = document.querySelector('#related-content-wrapper');
    const shuffledArray = content.sort((a, b) => 0.5 - Math.random());
    const slicedArray = shuffledArray.slice(0, 3);
    
    const cards = slicedArray.map(item => {

        return `
            <div class="item card ${item.tag}">
                <img src="${item.img}" alt="${item.title}">
                <div class="content">
                    <h3>
                        ${item.title}
                    </h3>
                    <p>
                        ${item.body}
                    </p>
                    <a href="${item.url}" class="btn">
                        Lees meer
                        <i class="fa-solid fa-angle-right"></i>
                    </a>
                </div>
            </div>
        `;
    }).join('');

    target.innerHTML = cards;
}

$(document).ready(function() {
    createCards();
});