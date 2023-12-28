const content = [
    {
        title: "Hiele Defreyne",
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
        tag: "advertising",
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
    // {
    //     title: "",
    //     tag: "",
    //     body: "",
    //     img: "/portfolio/",
    //     url: "/portfolio/"
    // },
    // {
    //     title: "",
    //     tag: "",
    //     body: "",
    //     img: "/portfolio/",
    //     url: "/portfolio/"
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