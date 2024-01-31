function closeAccordion(e) {
    $('.accordion-head').removeClass('active');
    $('.accordion-body').removeClass('active');
    $('.accordion-head').children('.icon').removeClass('active');
    $('.accordion-head').children('.icon').children('i').removeClass('fa-minus');
    $('.accordion-head').children('.icon').children('i').addClass('fa-plus');
};

$('.accordion-item').click(function () {
    closeAccordion();

    $(this).children('.accordion-head').toggleClass('active');
    $(this).children('.accordion-head').siblings('.accordion-body').toggleClass('active');
    $(this).children('.accordion-head').children('.icon').toggleClass('active');

    $(this).children('.accordion-head').children('.icon').children('i').removeClass('fa-plus');
    $(this).children('.accordion-head').children('.icon').children('i').addClass('fa-minus');
});

const content = [
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
        title: "Website Ontwikkeling voor Retro Biketours Brugge",
        tag: "website-development",
        body: "",
        img: "/portfolio/retro-biketours/img/banner.jpg",
        url: "/portfolio/retro-biketours/"
    },
];

function createCards(e) {
    const target = document.querySelector('#related-content-wrapper');
    const shuffledArray = content.sort((a, b) => 0.5 - Math.random());
    const slicedArray = shuffledArray.slice(0, 3);
    
    const cards = slicedArray.reverse().map(item => {

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