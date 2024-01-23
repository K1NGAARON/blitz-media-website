const content = [
    {
        title: "Goeie content zorgde voor een snelle groei van bij de start!",
        tag: "content-management",
        body: "",
        img: "/portfolio/gritstudio/img/banner.jpg",
        url: "/portfolio/gritstudio/"
    },
    {
        title: "Ambachtelijke excellentie verwerken in een nieuwe website",
        tag: "website-development",
        body: "",
        img: "/portfolio/hiele-defreyne/img/banner.jpg",
        url: "/portfolio/hiele-defreyne/"
    },
    {
        title: "Custom website met online boekingsysteem voor Coin Perdu",
        tag: "website-development",
        body: "",
        img: "/portfolio/coin-perdu/img/banner.jpg",
        url: "/portfolio/coin-perdu"
    },
    {
        title: "Een stevige basis voor groei met een nieuwe website",
        tag: "website-development",
        body: "",
        img: "/portfolio/vloeren-heyrick/img/banner.jpg",
        url: "/portfolio/vloeren-heyrick/"
    },
    {
        title: "Gloednieuwe website voor Klimatherm",
        tag: "website-development",
        body: "",
        img: "/portfolio/klimatherm/img/banner.jpg",
        url: "/portfolio/klimatherm/"
    },
    {
        title: "Website Ontwikkeling voor Retro Biketours Brugge",
        tag: "website-development",
        body: "",
        img: "/portfolio/retro-biketours/img/banner.jpg",
        url: "/portfolio/retro-biketours/"
    },
    {
        title: "Website Ontwikkeling voor Content Media",
        tag: "website-development",
        body: "",
        img: "/portfolio/content-media/img/banner.jpg",
        url: "/portfolio/content-media/"
    },
    {
        title: "Digitale marketing campagne voor een boekhouder",
        tag: "advertising",
        body: "",
        img: "/portfolio/online-boekhouder/img/banner.jpg",
        url: "/portfolio/online-boekhouder/"
    },
    {
        title: "Hoe een nieuwe website voor meer leads zorgt",
        tag: "website=development",
        body: "",
        img: "/portfolio/sunday/img/banner.jpg",
        url: "/portfolio/sunday/"
    },
    // {
    //     title: "",
    //     tag: "",
    //     body: "",
    //     img: "/portfolio/",
    //     url: "/portfolio/"
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