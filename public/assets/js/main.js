(function ($) {
  "use strict";

  /* JS Activation Index
==============================================

    01. Preloader		
    02. Mobile Menu
    03. Menu sticky & Scroll to top
    04. Scroll Up  
    05. Main Slider
    06. Brand Active	
    07. Magnific Popup	
    08. Isotope	Active 
    09. Swiper Active For Featured
    10. Swiper Active For Project 
    11. Swiper Active For Client  
    12. Swiper Active For Client  	
    13. Swiper Active For Team 
    14. Background Active
    15. Search Active  
    16. Isotop Active  
    17. Progressbar Active  
    18. Offcanvas Menu
    19. Wow Active  	
    20. Odometer Active
    21. Postbox-slider

==============================================*/

  /*=============================================
  =    		 01. Preloader			      =
=============================================*/
  function preloader() {
    $("#preloader").delay(0).fadeOut();
  }

  $(window).on("load", function () {
    preloader();
    tg_title_animation();
    wowAnimation();
  });

  /*=============================================
  =    		02. Mobile Menu			      =
=============================================*/
  //SubMenu Dropdown Toggle
  if ($(".tgmenu__wrap li.menu-item-has-children ul").length) {
    $(".tgmenu__wrap .navigation li.menu-item-has-children").append(
      '<div class="dropdown-btn"><span class="plus-line"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".tgmobile__menu").length) {
    var mobileMenuContent = $(".tgmenu__wrap .tgmenu__main-menu").html();
    $(".tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer").append(
      mobileMenuContent
    );

    //Dropdown Button
    $(".tgmobile__menu li.menu-item-has-children .dropdown-btn").on(
      "click",
      function () {
        $(this).toggleClass("open");
        $(this).prev("ul").slideToggle(300);
      }
    );
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".tgmobile__menu-backdrop, .tgmobile__menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }

  /*=============================================
  =     03. Menu sticky & Scroll to top      =
=============================================*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $(".scroll-to-target").removeClass("open");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $(".scroll-to-target").addClass("open");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  /*=============================================
  =    		 04. Scroll Up  	         =
=============================================*/
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  /*=============================================
  =    		 05. Main Slider		      =
=============================================*/
  function mainSlider() {
    var BasicSlider = $(".slider-active");
    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.single-slider[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      fade: true,
      arrows: false,
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } },
      ],
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }

  /*=============================================
  =    		06. Brand Active		      =
=============================================*/
  $(".brand-active").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  /*=============================================
  =    		07. Magnific Popup		      =
=============================================*/
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  /*=============================================
  =    		08. Isotope	Active  	      =
=============================================*/
  $(".grid").imagesLoaded(function () {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
    });
    // filter items on button click
    $(".portfolio-menu").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });
  });
  //for menu active class
  $(".product-license li").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });

  /*=============================================
  =    		 09. Swiper Active For Featured  	         =
=============================================*/

  $(".tg-sliderStyle1").each(function (i) {
    let tgSliderStyle1 = $(this).get(0);
    let prev = $(this).parents(".tg-slide-wrap").find(".btn-prev").get(0);
    let next = $(this).parents(".tg-slide-wrap").find(".btn-next").get(0);

    new Swiper(tgSliderStyle1, {
      slidesPerView: "auto",
      centeredSlides: true,
      centeredSlidesBounds: true,
      loop: true,
      spaceBetween: 15,
      slideToClickedSlide: true,
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: ".tg-pagination1",
        clickable: true,
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      speed: 800,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
      },
    });
  });

  /*=============================================
  =    		 10. Swiper Active For Project  	         =
=============================================*/

  $(".tg-sliderStyle2").each(function (i) {
    let tgSliderStyle2 = $(this).get(0);
    let prev = $(this).parents(".tg-slide-wrap2").find(".btn-prev").get(0);
    let next = $(this).parents(".tg-slide-wrap2").find(".btn-next").get(0);

    new Swiper(tgSliderStyle2, {
      slidesPerView: 4.4,
      loop: true,
      spaceBetween: 33,
      slideToClickedSlide: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".tg-pagination1",
        clickable: true,
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      speed: 800,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2.8,
        },
        1200: {
          slidesPerView: 3.4,
        },
        1400: {
          slidesPerView: 4.4,
        },
      },
    });
  });
  /*=============================================
  =    		 11. Swiper Active For Client  	         =
=============================================*/

  $(".tg-sliderStyle3").each(function (i) {
    let tgSliderStyle3 = $(this).get(0);
    let prev = $(this).parents(".tg-slide-wrap3").find(".btn-prev").get(0);
    let next = $(this).parents(".tg-slide-wrap3").find(".btn-next").get(0);

    new Swiper(tgSliderStyle3, {
      slidesPerView: 2,
      loop: true,
      spaceBetween: 30,
      slideToClickedSlide: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".tg-pagination1",
        clickable: true,
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      speed: 800,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
      },
    });
  });

  /*=============================================
  =    		 12. Swiper Active For Client  	         =
=============================================*/
  $(".tg-sliderStyle4").each(function (i) {
    let tgSliderStyle4 = $(this).get(0);
    let prev = $(this).parents(".tg-slide-wrap4").find(".btn-prev").get(0);
    let next = $(this).parents(".tg-slide-wrap4").find(".btn-next").get(0);

    new Swiper(tgSliderStyle4, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 30,
      slideToClickedSlide: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".tg-pagination1",
        clickable: true,
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      speed: 800,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2.5,
        },
        1400: {
          slidesPerView: 3.5,
        },
        1600: {
          slidesPerView: 4.5,
        },
      },
    });
  });
  /*=============================================
  =    		 13. Swiper Active For Team  	         =
=============================================*/
  $(".tg-sliderStyle5").each(function (i) {
    let tgSliderStyle5 = $(this).get(0);
    let prev = $(this).parents(".tg-slide-wrap5").find(".btn-prev").get(0);
    let next = $(this).parents(".tg-slide-wrap5").find(".btn-next").get(0);

    new Swiper(tgSliderStyle5, {
      slidesPerView: 3,
      centeredSlides: true,
      loop: true,
      spaceBetween: 30,
      slideToClickedSlide: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".tg-pagination1",
        clickable: true,
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      speed: 1000,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  });
  /*=============================================
  =    		 14. Background Active  	         =
=============================================*/
  $("[data-bg-image]").each(function () {
    const img = $(this).data("bg-image");
    $(this).css({
      backgroundImage: `url(img.html)`,
    });
  });

  /*=============================================
  =    		 15. Search Active  	         =
=============================================*/
  let searchBlock = $(".search-block");
  let searchButton = $(".search--button");
  let searchClose = $(".search-block__close");

  searchButton.on("click", function (e) {
    e.preventDefault();
    searchBlock.animate({ opacity: "toggle" }, 500);
    searchButton.add(searchClose).addClass("open");
  });

  searchClose.on("click", function (e) {
    e.preventDefault();
    searchBlock.animate({ opacity: "toggle" }, 500);
    searchButton.add(searchClose).removeClass("open");
  });

  function closeSearch() {
    searchBlock.fadeOut(200);
    searchButton.add(searchClose).removeClass("open");
  }

  $(document.body).on("click", function (e) {
    closeSearch();
  });

  $(".search--button, .search-block__field-input").on("click", function (e) {
    e.stopPropagation();
  });

  /*=============================================
  =    		 16. Isotop Active  	         =
=============================================*/
  $(".grid").imagesLoaded(function () {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item",
      },
    });
  });

  /*=============================================
  =    		 17. Progressbar Active  	         =
=============================================*/
  let getDivs = document.querySelectorAll(".skill-bar");

  getDivs.forEach(function (skillbar) {
    let data = skillbar.getAttribute("data-width");
    skillbar.style.width = data;
  });

  // Intersection Observer options
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2, // Adjust this threshold value as needed
  };

  // Callback function for Intersection Observer
  function animateOnScroll(entries, observer) {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("animated")
      ) {
        const skillBar = entry.target;

        // Animate skills block number and progress bar
        const skillsNumber = skillBar.querySelector(".skills-block__number");
        const progressBar = skillBar.querySelector(
          ".skills-block__progress-bar"
        );

        skillsNumber.style.width = skillsNumber.getAttribute("data-width");
        progressBar.style.width = progressBar.getAttribute("data-width");

        skillsNumber.style.transitionDuration = "60s"; // Adjust the transition duration as needed
        progressBar.style.transitionDuration = "60s"; // Adjust the transition duration as needed

        skillsNumber.classList.add("slideInLeft", "animated");
        progressBar.classList.add("slideInLeft", "animated");

        // Add a class to mark the element as animated
        skillBar.classList.add("animated");

        // Remove the Intersection Observer once animation is triggered
        observer.unobserve(skillBar);
      }
    });
  }

  // Create the Intersection Observer
  const skillBarObserver = new IntersectionObserver(
    animateOnScroll,
    observerOptions
  );

  // Select all skill bars
  const skillBars = document.querySelectorAll(".skills-block__item");

  // Observe each skill bar
  skillBars.forEach((skillBar) => {
    skillBarObserver.observe(skillBar);
  });

  /*=============================================
=     18. Offcanvas Menu      =
=============================================*/
  $(".tg-header__burger").on("click", function () {
    $(".extra-info,.offcanvas-overly").addClass("active");
    return false;
  });
  $(".menu-close,.offcanvas-overly").on("click", function () {
    $(".extra-info,.offcanvas-overly").removeClass("active");
  });

  $(document).ready(function () {
    // Retrieve the active menu item from local storage
    var activeMenuItem = localStorage.getItem("activeMenuItem");

    if (activeMenuItem) {
      // Add the 'active' class to the stored active menu item
      $(".navigation li a").removeClass("active-menu");
      $('.navigation li a[data-menu="' + activeMenuItem + '"]').addClass(
        "active-menu"
      );
    }

    $(".navigation li a").click(function (e) {
      // Get the href value of the clicked menu item
      var menuItemHref = $(this).attr("href");

      // Store the active menu item in local storage
      localStorage.setItem("activeMenuItem", menuItemHref);

      // Add the 'active' class to the clicked menu item
      $(".navigation li a").removeClass("active-menu");
      $(this).addClass("active-menu");
    });
  });

  /*=============================================
  =    		 19. Wow Active  	         =
=============================================*/
  function wowAnimation() {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }

  /*=============================================
  =    		20. Odometer Active  	       =
=============================================*/
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  /*=============================================
  =    		 21. Swiper Active For Sponsor  	         =
=============================================*/

  $(".tg-sponsor").each(function (i) {
    let tgSliderStyle1 = $(this).get(0);
    let prev = $(this).parents(".tg-slide-wrap").find(".btn-prev").get(0);
    let next = $(this).parents(".tg-slide-wrap").find(".btn-next").get(0);

    new Swiper(tgSliderStyle1, {
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 15,
      slideToClickedSlide: true,
      autoplay: {
        delay: 5000,
      },
      pagination: false,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      speed: 800,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });
  });

  // 21. Postbox-slider
	// var postboxSlider = new Swiper('.eg-postbox-slider', {
	// 	slidesPerView: 1,
	// 	spaceBetween: 0,
	// 	loop: true,
	// 	rtl: rtl_setting,
	// 	autoplay: {
	// 		delay: 3000,
	// 	},
	// 	// Navigation arrows
	// 	navigation: {
	// 		nextEl: ".eg-postbox-slider-button-next",
	// 		prevEl: ".eg-postbox-slider-button-prev",
	// 	},

	// });

  
  // $(".eg-postbox-slider").each(function (i) {
  //   let tgSliderStyle3 = $(this).get(0);
  //   let prev = $(this).parents(".eg-postbox-slider-button-next").find(".btn-prev").get(0);
  //   let next = $(this).parents(".eg-postbox-slider-button-prev").find(".btn-next").get(0);

  //   new Swiper(tgSliderStyle3, {
  //     slidesPerView: 1,
  //     spaceBetween: 0,
  //     loop: true,
  //     autoplay: {
  //       delay: 5000,
  //     },
  //     pagination: {
  //       el: ".tg-pagination1",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: next,
  //       prevEl: prev,
  //     },
  //     breakpoints: {
  //       '1200': {
  //         slidesPerView: 1,
  //       },
  //       '992': {
  //         slidesPerView: 1,
  //       },
  //       '768': {
  //         slidesPerView: 1,
  //       },
  //       '576': {
  //         slidesPerView: 1,
  //       },
  //       '0': {
  //         slidesPerView: 1,
  //       },
  //     },
  //   });
  // });


  $(".eg-postbox-slider").each(function (i) {
    let tgSliderStyle3 = $(this).get(0);
    let prev = $(this).parents(".eg-postbox-slider-button-next").find(".btn-prev").get(0);
    let next = $(this).parents(".eg-postbox-slider-button-prev").find(".btn-next").get(0);

    new Swiper(tgSliderStyle3, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
        '1200': {
          slidesPerView: 1,
        },
        '992': {
          slidesPerView: 1,
        },
        '768': {
          slidesPerView: 1,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });
  });




  // End
})(jQuery);
