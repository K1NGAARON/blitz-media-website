const content = [
    {
        title: "12 SEO tips om hoog te scoren in Google",
        tag: "seo",
        body: "",
        img: "/blog/12-seo-tips/img/banner.jpg",
        url: "/blog/12-seo-tips/"
    },
    {
        title: "Maak een website in 4 stappen",
        tag: "website-development",
        body: "",
        img: "/blog/website-4-stappen/img/banner.jpg",
        url: "/blog/website-4-stappen/"
    },
    {
        title: "Een online kalender integreren in jouw website",
        tag: "website-development",
        body: "",
        img: "/blog/online-kalender-in-website/img/banner.jpg",
        url: "/blog/online-kalender-in-website/"
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