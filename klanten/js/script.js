const content = [
    {
        title: "Ambachtelijke excellentie verwerken in een nieuwe website",
        tag: "website-development",
        body: "",
        img: "/klanten/hiele-defreyne/img/banner.jpg",
        url: "/klanten/hiele-defreyne/"
    },
    {
        title: "Custom website met online boekingsysteem voor Coin Perdu",
        tag: "website-development",
        body: "",
        img: "/klanten/coin-perdu/img/banner.jpg",
        url: "/klanten/coin-perdu"
    },
    {
        title: "Vloeren Heyrick",
        tag: "website-development",
        body: "",
        img: "/klanten/vloeren-heyrick/img/banner.jpg",
        url: "/klanten/vloeren-heyrick/"
    },
    {
        title: "Gloednieuwe website voor Klimatherm",
        tag: "website-development",
        body: "",
        img: "/klanten/klimatherm/img/banner.jpg",
        url: "/klanten/klimatherm/"
    },
    {
        title: "Website Ontwikkeling voor Retro Biketours Brugge",
        tag: "website-development",
        body: "",
        img: "/klanten/retro-biketours/img/banner.jpg",
        url: "/klanten/retro-biketours/"
    },
    {
        title: "Website Ontwikkeling voor Content Media",
        tag: "website-development",
        body: "",
        img: "/klanten/content-media/img/banner.jpg",
        url: "/klanten/content-media/"
    },
    {
        title: "Digitale marketing campagne voor een boekhouder",
        tag: "advertisings",
        body: "",
        img: "/klanten/online-boekhouder/img/banner.jpg",
        url: "/klanten/online-boekhouder/"
    },
    {
        title: "Hoe een nieuwe website voor meer leads zorgt",
        tag: "website=development",
        body: "",
        img: "/klanten/sunday/img/banner.jpg",
        url: "/klanten/sunday/"
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