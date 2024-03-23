function addClientLogos() {
    const clientLogos = [
        {
            img: "/home/img/logos/bitpanda-logo.png",
            client: "Bitpanda"
        },
        {
            img: "/home/img/logos/cashflowforlife.png",
            client: "Cashflowforlife"
        },
        {
            img: "/home/img/logos/dumobil-logo.png",
            client: "Dumobil"
        },
        {
            img: "/home/img/logos/evy-flavour.png",
            client: "Evy's Flavour"
        },
        {
            img: "/home/img/logos/gusto-mundo-logo.png",
            client: "Gusto Mundo"
        },
        {
            img: "/home/img/logos/hiele-defreyne.png",
            client: "Hiele Defreyne"
        },
        {
            img: "/home/img/logos/klimatherm.png",
            client: "Klimatherm"
        },
        {
            img: "/home/img/logos/kordekor.png",
            client: "Kordekor"
        },
        {
            img: "/home/img/logos/lansweeper.png",
            client: "Lansweeper"
        },
        {
            img: "/home/img/logos/proximus-logo.png",
            client: "Proximus"
        },
        {
            img: "/home/img/logos/tvh.png",
            client: "TVH"
        },
        {
            img: "/home/img/logos/ide-logo.png",
            client: "IDE Automotive"
        },
        {
            img: "/home/img/logos/az-reno-logo.png",
            client: "AZ Reno"
        },
        {
            img: "/home/img/logos/sdk-logo.png",
            client: "Studieburo De Klerck"
        },
        {
            img: "/home/img/logos/vivox-logo.png",
            client: "Vivox"
        },
        // {
        //     img: "/home/img/logos/",
        //     client: ""
        // },
        // {
        //     img: "/home/img/logos/",
        //     client: ""
        // },
    ];

    const shuffledArray = clientLogos.sort((a, b) => 0.5 - Math.random());
    const slicedArray = shuffledArray.slice(0, 7);

    const target = document.querySelector('#logos-target');
    
    const logos = slicedArray.reverse().map(item => {
            
        return `
            <div class="item">
                <img src="${item.img}" alt="${item.client}">
            </div>
        `;
    }).join('');

    target.innerHTML = logos;
};

function changeReviews() {
    const reviews = [
        {
            name: "Lisa R.",
            review: "Een fijne samenwerking en vooral een mooi eindresultaat. Zeer tevreden met de website van Content Media!",
        },
        {
            name: "Linda D.",
            review: "Professionele aanpak bij het ontwerp van nieuwe website! Aaron is zeer correct in afspraken en staat open voor input naast zijn vernieuwende ideeën om tot een aantrekkelijke en overzichtelijke lay-out te komen!"
        },
        {
            name: "Arno V.",
            review: "Voor onze internationale expansie, was het snel duidelijk dat er nood was aan talent. Niet iedereen is een held in communicatie, uitvoering en afleveren, zeker niet mbt. Websites & Ads. Ver weg van de vele cowboys en praatjesmakers vond ik Aaron terug. De samenwerking heeft de volledige omvang en ervaring van ons bedrijf voor goed kunnen veranderen. Met een conversie gerichte website die toch simpliciteit uitstraalt, slaagden we erin om ons bedrijf op een nieuw level te zetten. Aaron en zijn team kennen geen limieten, dat maakt hun voor mij de partij bij uitstek om deze langetermijn relatie nog jaren verder op te bouwen. Een aanrader van formaat!"
        }
    ];

    $('.dot').removeClass('active');
    $(this).addClass('active');

    const dotIndex = $('.dot').index(this);
    const reviewContainer = $('.review-wrapper');

    reviewContainer.find('.review-author').text(reviews[dotIndex].name);
    reviewContainer.find('.review-body').text(reviews[dotIndex].review);
};

$('.dot').click(changeReviews);
$(document).ready(addClientLogos);