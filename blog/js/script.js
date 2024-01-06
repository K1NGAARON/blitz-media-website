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
    {
        title: "De perfecte restaurant website",
        tag: "website-development",
        body: "",
        img: "/blog/perfecte-restaurant-website/img/banner.jpg",
        url: "/blog/perfecte-restaurant-website/"
    },
    {
        title: "Website laten optimaliseren: verbeter de prestaties van je website",
        tag: "website-development",
        body: "",
        img: "/blog/website-laten-optimaliseren/img/banner.jpg",
        url: "/blog/website-laten-optimaliseren/"
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
    const target = document.querySelector('#content');
    const cards = content.map(item => {

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

function filterContent(e) {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    $('.content .card').fadeOut();

    let activeFilter = $(this).attr('id');

    if (activeFilter === 'all') {
        $('.content .card').fadeIn();
    } else {
        $('.' + activeFilter).fadeIn();
    }
}

$(document).ready(function() {
    createCards();
    $('.filter-btn').click(filterContent);
});