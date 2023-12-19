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