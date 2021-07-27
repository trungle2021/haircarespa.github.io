
$(document).ready(function(){

    $('.best-seller').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav: true,
        navigation:true,
        dots: false,
        autoplay: true,
        autoHeight:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
                loop:true
                
            }
        }
    });

    $('.ingredient-carousel').owlCarousel({
        center: true,
            items:3,
            loop:true,
            margin:30,
            nav:false,
            dots:false,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 2000,
            autoplaySpeed: 2000,
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })

        $('.text1-carousel').owlCarousel({
            center: true,
                items:3,
                loop:true,
                // margin:30,
                nav:false,
                dots:false,
                autoplay: true,
                slideTransition: 'linear',
                autoplayTimeout:5000,
                autoplaySpeed:5000,
                autoplayHoverPause:false,
                mouseDrag: false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:2
                    }
                }
            })
//CLICK MOVE HAIR PROBLEMS PAGE 
           $('#hairproblems-click').click(function(){
            window.location.href = "https://trungle2021.github.io/master/hair-problems.html";
           })

});