/* ===================================================================
    Author          : ModinaTheme
    Version         : 1.0
    ¸ü¶àÏÂÔØ£ºHttp://www.bootstrapmb.com
* ================================================================= */

(function($) {
    "use strict";

    $(document).ready( function() {

      //>> Mobile Menu Js Start <<//
      $('#mobile-menu').meanmenu({
          meanMenuContainer: '.mobile-menu',
          meanScreenWidth: "991",
          meanExpand: ['<i class="far fa-plus"></i>'],
      });

      //>> Sidebar Toggle Js Start <<//
      $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
          $(".offcanvas__info").removeClass("info-open");
          $(".offcanvas__overlay").removeClass("overlay-open");
      });
      $(".sidebar__toggle").on("click", function() {
          $(".offcanvas__info").addClass("info-open");
          $(".offcanvas__overlay").addClass("overlay-open");
      });

      //>> Body Overlay Js Start <<//
      $(".body-overlay").on("click", function() {
          $(".offcanvas__area").removeClass("offcanvas-opened");
          $(".df-search-area").removeClass("opened");;
          $(".body-overlay").removeClass("opened");
      });

      //>> Sticky Header Js Start <<//

      $(window).scroll(function() {
          if ($(this).scrollTop() > 250) {
              $("#header-sticky").addClass("sticky");
          } else {
              $("#header-sticky").removeClass("sticky");
          }
      });

      // Init slick slider + animation
      $('.hero-1 .hero-slider-active').slick({
        autoplay: true,
        speed: 1500,
        lazyLoad: 'progressive',
        arrows: true,
        dots: false,
        prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
      }).slickAnimation();

      $('.hero-3 .hero-slider-active-2').slick({
        autoplay: true,
        speed: 1500,
        lazyLoad: 'progressive',
        arrows: true,
        fade: true,
        dots: false,
        prevArrow: $('.hero-nav-prev'),
        nextArrow: $('.hero-nav-next'),
      }).slickAnimation();
        

      //>> Video Popup Start <<//
      $(".img-popup").magnificPopup({
          type: "image",
          gallery: {
              enabled: true,
          },
      });

      $('.video-popup').magnificPopup({
          type: 'iframe',
          callbacks: {
          }
      });
      
      //>> Counterup Start <<//
      $(".count").counterUp({
          delay: 15,
          time: 4000,
      });

      //>> Wow Animation Start <<//
      new WOW().init();

      //>> Nice Select Start <<//
      $('select').niceSelect();

      //>> Service Carousel Start <<//
      if($('.service-carousel-active').length > 0) {
          $('.service-carousel-active').slick({
              autoplay: true,
              autoplaySpeed: 2000,
              infinite:false,
              speed: 500,
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 1, 
              dots: true,
              dotsClass: 'slide-dots',
              responsive: [
                  {
                    breakpoint: 1600,
                    settings: {
                      slidesToShow: 3
                    }
                  },
                  {
                    breakpoint: 1399,
                    settings: {
                      slidesToShow: 2
                    }
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                      center: true,
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1
                    }
                  }
              ],

          });
      }

      //>> Brand Carousel Start <<//
      if($('.brand-carousel-active').length > 0) {
          $('.brand-carousel-active').slick({
              autoplay: true,
              autoplaySpeed: 2000,
              //centerMode: true,
              speed: 500,
              arrows: false,
              slidesToShow: 6,
              slidesToScroll: 1, 
              dots: false,
              dotsClass: 'slide-dots',
              responsive: [
                  {
                    breakpoint: 1199,
                    settings: {
                      slidesToShow: 5,
                    }
                  },
                  {
                      breakpoint: 991,
                      settings: {
                        slidesToShow: 4,
                      }
                    },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 3,
                      center: true,
                    }
                  },
                  {
                    breakpoint: 575,
                    settings: {
                      slidesToShow: 2,
                    }
                  }
              ],

          });
      }

      if($('.brand-carousel-active-2').length > 0) {
          $('.brand-carousel-active-2').slick({
              autoplay: true,
              autoplaySpeed: 2000,
              //centerMode: true,
              speed: 500,
              arrows: false,
              slidesToShow: 5,
              slidesToScroll: 1, 
              dots: false,
              dotsClass: 'slide-dots',
              responsive: [
                  {
                    breakpoint: 1199,
                    settings: {
                      slidesToShow: 5,
                    }
                  },
                  {
                      breakpoint: 991,
                      settings: {
                        slidesToShow: 4,
                      }
                    },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 3,
                      center: true,
                    }
                  },
                  {
                    breakpoint: 575,
                    settings: {
                      slidesToShow: 2,
                    }
                  }
              ],

          });
      }
        
      //>> Testimonial Carousel Start <<//
      if($('.testimonial-carousel-active').length > 0) {
          $('.testimonial-carousel-active').slick({
              autoplay: true,
              autoplaySpeed: 2000,
              speed: 500,
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 1, 
              dots: true,
              dotsClass: 'slide-dots',
              responsive: [
                  {
                    breakpoint: 1399,
                    settings: {
                      slidesToShow: 3,
                    }
                  },
                  {
                    breakpoint: 1191,
                    settings: {
                      slidesToShow: 2,
                    }
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                      center: true,
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1
                    }
                  }
              ],

          });
      }

      if($('.testimonial-carousel-active-2').length > 0) {
        $('.testimonial-carousel-active-2').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1, 
            dots: true,
            dotsClass: 'slide-dots',
            responsive: [
                {
                  breakpoint: 1399,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 1191,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    center: true,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1
                  }
                }
            ],

        });
      }

      if($('.testimonial-carousel-active-3').length > 0) {
        $('.testimonial-carousel-active-3').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1, 
            arrows: true,
            dots: false,
            prevArrow: $('.testimonial-nav-prev'),
            nextArrow: $('.testimonial-nav-next'),
        });
      }

      if($('.testimonial-carousel-active-4').length > 0) {
        $('.testimonial-carousel-active-4').slick({
            autoplay: true,
            autoplaySpeed: 1500,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1, 
            arrows: true,
            dots: false,
            prevArrow: $('.testimonial-nav-prev'),
            nextArrow: $('.testimonial-nav-next'),
        });
      }

      //>> Case Studies Carousel Start <<//
      if($('.case-studies-carousel-active').length > 0) {
        $('.case-studies-carousel-active').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 800,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1, 
            dots: false,
            dotsClass: 'slide-dots',
            responsive: [
                {
                  breakpoint: 1699,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                {
                  breakpoint: 1499,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 1191,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    center: true,
                  }
                },
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 1
                  }
                }
            ],

        });
      }

      if($('.case-studies-carousel-active-2').length > 0) {
        $('.case-studies-carousel-active-2').slick({
            autoplay: true,
            autoplaySpeed: 1500,
            speed: 1000,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            dotsClass: 'slide-dots',
            responsive: [
                {
                  breakpoint: 1499,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 1399,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    center: true,
                  }
                },
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 1
                  }
                }
            ],

        });
      }

      //>> News Carousel Start <<//
      if($('.news-carousel-active').length > 0) {
        $('.news-carousel-active').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 800,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1, 
            dots: true,
            dotsClass: 'slide-dots',
            responsive: [
                {
                  breakpoint: 1399,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 1191,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    center: true,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1
                  }
                }
            ],

        });
      }

      //>>Background image Start <<//
        $("[data-background").each(function () {
          $(this).css(
              "background-image",
              "url( " + $(this).attr("data-background") + "  )"
          );
      });

      //>>Image Class Add Start <<//
      $(document).on("mouseenter", ".changeImage2", function () {
          let newImage = $(this).data("image");
          let fadeDuration = 200;

          $("#myImage2").fadeOut(fadeDuration, function () {
              $("#myImage2").attr("src", newImage);
              $("#myImage2").fadeIn(fadeDuration);
          });

          $(this).addClass("clicked");
          $(".changeImage2").not(this).removeClass("clicked");
      });

      //>> Search Popup Start <<//
      const $searchWrap = $(".search-wrap");
      const $navSearch = $(".nav-search");
      const $searchClose = $("#search-close");

      $(".search-trigger").on("click", function (e) {
          e.preventDefault();
          $searchWrap.animate({ opacity: "toggle" }, 500);
          $navSearch.add($searchClose).addClass("open");
      });

      $(".search-close").on("click", function (e) {
          e.preventDefault();
          $searchWrap.animate({ opacity: "toggle" }, 500);
          $navSearch.add($searchClose).removeClass("open");
      });

      function closeSearch() {
          $searchWrap.fadeOut(200);
          $navSearch.add($searchClose).removeClass("open");
      }

      $(document.body).on("click", function (e) {
          closeSearch();
      });

      $(".search-trigger, .main-search-input").on("click", function (e) {
          e.stopPropagation();
      });

      //>> Mouse Cursor Start <<//
      function mousecursor() {
          if ($("body")) {
              const e = document.querySelector(".cursor-inner"),
                  t = document.querySelector(".cursor-outer");
              let n,
                  i = 0,
                  o = !1;
              (window.onmousemove = function(s) {
                  o ||
                      (t.style.transform =
                          "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                      (e.style.transform =
                          "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                      (n = s.clientY),
                      (i = s.clientX);
              }),
              $("body").on("mouseenter", "a, .cursor-pointer", function() {
                      e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                  }),
                  $("body").on("mouseleave", "a, .cursor-pointer", function() {
                      ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
                      (e.classList.remove("cursor-hover"),
                          t.classList.remove("cursor-hover"));
                  }),
                  (e.style.visibility = "visible"),
                  (t.style.visibility = "visible");
          }
      }
      $(function() {
          mousecursor();
      });
    

      // circle-progress
      $(".circle-bar").loading();


    }); // End Document Ready Function

    $.fn.loading = function() {
        const DEFAULTS = {
            backgroundColor: '#b3cef6',
            progressColor: '#4b86db',
            percent: 75,
            duration: 2000
        };

        $(this).each(function() {
            const $target = $(this);

            const opts = {
                backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
                progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
                percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
                duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
            };
            // console.log(opts);

            $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span></div>');

            $target.find('.background').css('background-color', opts.backgroundColor);
            $target.find('.left').css('background-color', opts.backgroundColor);
            $target.find('.rotate').css('background-color', opts.progressColor);
            $target.find('.right').css('background-color', opts.progressColor);

            const $rotate = $target.find('.rotate');
            setTimeout(function() {
                $rotate.css({
                    'transition': 'transform ' + opts.duration + 'ms linear',
                    'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
                });
            }, 1);

            if (opts.percent > 50) {
                let animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
                let animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';
                $target.find('.right').css({
                    animation: animationRight,
                    opacity: 1
                });
                $target.find('.left').css({
                    animation: animationLeft,
                    opacity: 0
                });
            }
        });
    }

    function loader() {
      $(window).on('load', function() {
          // Animate loader off screen
          $(".preloader").addClass('loaded');
          $(".preloader").delay(600).fadeOut();
      });
  }
  loader();
    

})(jQuery); // End jQuery

