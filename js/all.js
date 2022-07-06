$(document).ready(function () {
    // 引入需要先寫上$(document).ready()
    var swiper = new Swiper(".bannerSwiper", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });


    var swiper = new Swiper(".roomSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        // pagination: {
        //     el: ".swiper-pagination",
        // },
    });


    var mm = window.matchMedia("(max-width: 768px)");
    mm.addListener(resizeWidth);
    resizeWidth(mm);

    function resizeWidth(pMatchMedia) {
        if (pMatchMedia.matches) {
            //小於768時執行的js 
            console.log("Hi!");
        } else {
            //大於768時執行的js
        }
    }

 

});


