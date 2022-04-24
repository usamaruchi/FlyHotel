$(document).ready(function () {



    console.log("Hi!");

    var mm = window.matchMedia("(max-width: 900px)");
    mm.addListener(resizeWidth);
    resizeWidth(mm);

    function resizeWidth(pMatchMedia) {
        if (pMatchMedia.matches) {



            $('.room-1').css('transform', 'translateX(0)').css('opacity', '1');
            $('.room-2').css('transform', 'translateX(0)').css('opacity', '1');
            $('.room-3').css('transform', 'translateX(0)').css('opacity', '1');

        } else {
            $(window).scroll(function () {
                console.log('scrollTop', $(window).scrollTop()
                );
                // const widowHeight = $(window).height();
                // const bodyHeight = $('body').height();
                const scorllTop = $(window).scrollTop();
                const widowHeight = $(window).height();
                const bodyHeight = $('body').height();

                // $('.bar').css('width', `${scorllTop / (bodyHeight - widowHeight) * 100}%`)

                if (scorllTop > 350) {
                    $('.room-1').css('transform', 'translateX(0)').css('opacity', '1');
                } else {
                    $('.room-1').css('transform', 'translateX(-10%)').css('opacity', '0');
                }

                if (scorllTop > 700) {
                    $('.room-2').css('transform', 'translateX(0)').css('opacity', '1');
                } else {
                    $('.room-2').css('transform', 'translateX(10%)').css('opacity', '0');
                }

                if (scorllTop > 1050) {
                    $('.room-3').css('transform', 'translateX(0)').css('opacity', '1');
                } else {
                    $('.room-3').css('transform', 'translateX(-10%)').css('opacity', '0');
                }

            })
        }
    }

});