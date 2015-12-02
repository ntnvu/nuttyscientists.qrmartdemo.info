(function ($, root, undefined) {
    $(function(){
        $(document).ready(function(){
            var elementArr = {};
            var mySwiper = new Swiper ('.slide-1 .swiper-container', {
                loop: true,
                // If we need pagination
                pagination: '.swiper-pagination',

                // Navigation arrows
                nextButton: '.slide-1 .swiper-button-next',
                prevButton: '.slide-1 .swiper-button-prev',
                onSlideChangeStart: function(slider){
                    if(elementArr.length > 0)
                        elementArr.removeClass("show");
                },
                onSlideChangeEnd: function(slider){
                    elementArr = $(slider.slides[slider.activeIndex]).find(".element");
                    setTimeout(function(){
                        elementArr.addClass("show");
                    }, 1000);
                }

            });

            var mySwiper_2 = new Swiper ('.slide-2 .swiper-container', {
                loop: true,
                slidesPerView: 5,
                spaceBetweenSlides: 10,
                // Responsive breakpoints
                breakpoints: {
                    640: {
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 5
                    }
                },
                // Navigation arrows
                nextButton: '.slide-2 .swiper-button-next',
                prevButton: '.slide-2 .swiper-button-prev'
            });

            var menu_wrap = $("header nav");
            $(".show-menu").click(function(){
                $(menu_wrap).toggleClass("show");
            });

            $('.venobox').venobox();
        })
    });
})(jQuery, this);
