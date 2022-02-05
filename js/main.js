$(document).ready(function () {
    let aboutOffset = $("#about").offset().top;
    /* //////////////////onscroll///////////////// */
    $(window).scroll(function () {
        let windowScroll = $(window).scrollTop();
        if (windowScroll >= 100) {
            $("#main-nav").addClass("active-nav");
            $("#navbarNav a").addClass("gy-link")
            $(".navbar-toggler span").css("background-color","#282828")

        }
        else {
            $("#main-nav").removeClass("active-nav")
            $("#navbarNav a").removeClass("gy-link")
            $(".navbar-toggler span").css("background-color","#ffffff")

        }

        /* ////////////change navlink on scroll/////////// */
        $(".nav-item > a[href^='#']").each(function () {
            let navHref = $(this).attr("href");
            let sectionOffset = $(navHref).offset().top;
            let sectionHeight = $(navHref).outerHeight(true);
            let overOffset = sectionOffset + sectionHeight
            if (windowScroll >= (sectionOffset - 100) && windowScroll < overOffset) {
                $(this).addClass("active");
                $(this).parent().siblings().find(".nav-link").removeClass("active")
            }
            else {
                $(this).removeClass("active")
            }
        })
    });

    $("#topBtn").click(function () {
        $("html, body").animate({ scrollTop: "0" }, 1000)
    });
    /* ////////// scroll on click navlink//////// */
    $(".nav-item > a[href^='#']").click(function () {
        let navHref = $(this).attr("href");
        let sectionOffset = $(navHref).offset().top;
        $("html, body").animate({ scrollTop: sectionOffset }, { queue: false, duration: 1000 });
        $(this).addClass("active");
        $(this).parent().siblings().find(".nav-link").removeClass("active")
    });

    /* ////////// loader page ////////////////// */
    $(".spinner").fadeOut(1000)
    $("#loaderPage").delay(500).fadeOut(1000, function () {
        $("body").css("overflow-y", "auto");
    });
    /* ///////////typed animation///////////// */


    /* ///////////////counter///////////////// */
    $(".counter").counterUp({
        time: 2000,
        delay: 5
    });
    /* /////////scroll down btn/////////////// */
    $("#scrollDown").click(function () {
        $("html, body").animate({ scrollTop: aboutOffset }, 1000)
    });

    /* //////////////portfolio isotape//////////// */
    $(".portfolio-box-container").isotope({
        itemSelector: ".portfolio-box",

    });
    let $container = $(".portfolio-box-container").isotope({
        layoutMode: "masonry",
    });
    $(".filter>.filter-item>.filter-link").click(function () {
        $(this).addClass("port-active-link");
        $(this).parent().siblings().find(".filter-link").removeClass("port-active-link")
        let filterValue = $(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
    });

    $(".owl-carousel").owlCarousel(
        {
            autoplay: true,
            loop: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }


            }
        }
    );



    $("#colorBtn").click(function () {
        let innerBoxWidth = $(".inner-box").outerWidth(true);

        if ($(".color-box").css("right") == "0px") {
            $(".color-box").animate({ right: `-${innerBoxWidth}` }, 1000);
        }
        else {
            $(".color-box").animate({ right: `0` }, 1000);
        }
    });

    $(".color").click(function () {
        let currentColor = $(this).css("background-color");
        let borderColor = $(this).css("border-color");
        $(":root").css({ "--main-color": `${currentColor}`, "--hover-color": `${borderColor}` })
    })
    $("#reset").click(function () {
        let resetColor = $(this).css("background-color");
        let resetBorder = $(this).css("border-color")
        $(":root").css({ "--main-color": `${resetColor}`, "--hover-color": `${resetBorder}` })
    });


    /* /////////navbar on mobile */
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse, .navbar-toggler").removeClass("show");
    });
    /* //////////open setting section/////////// */
    $(".set-btn").click(function () {
        let setDetailWidth= $(".setting-details").outerWidth(true)
        if($(".setting-btn-content").css("left")=="0px"){
            $(".setting-btn-content").animate({left:`-${setDetailWidth}`},1000)

        }
        else{
            $(".setting-btn-content").animate({left:"0"},1000)
        }
      })

    /* //////////change theme color//////////// */
    $(".setting-colors span").click(function () {
        let srcTitle = $(this).attr('title').toLowerCase();
        $("#logo-brand").attr("src", `images/logo/logo-${srcTitle}.png`);
        let currentColor = $(this).css("background-color");
        let currentHover = $(this).css("border-color");
        $(":root").css({ "--mainColor": currentColor, "--hover-color": currentHover })
    })

});
