const content = [
    {
        title: "Hiele Defreyne",
        tag: "website-development",
        body: "",
        img: "/klanten/hiele-defreyne/img/banner.jpg",
        url: "/klanten/hiele-defreyne/"
    },
    {
        title: "Coin Perdu",
        tag: "advertising",
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
    
    const cards = shuffledArray.map(item => {

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