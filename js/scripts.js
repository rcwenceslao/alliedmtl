(function () {
    "use strict";
    jQuery(document).ready(function () {

        if ($('.map-canvas').length) {
            $('.map-canvas')
                .gmap3({
                    center: [48.8620722, 2.352047],
                    zoom: 4
                })
                .marker([{
                        position: [48.8620722, 2.352047]
                    },
                    {
                        address: "86000 Poitiers, France"
                    },
                    {
                        address: "66000 Perpignan, France",
                        icon: "https://maps.google.com/mapfiles/marker_grey.png"
                    }
                ])
                .on('click', function (marker) {
                    marker.setIcon('https://maps.google.com/mapfiles/marker_green.png');
                });
        }

        if ($('#mc-form').length) {
            $('#mc-form').ajaxChimp({
                url: '//themeatom.us8.list-manage.com/subscribe/post?u=ff3692fd18ce8994d8d025404&amp;id=aab3b54290'
            });
        }

        // Menuzord Navigation Menu Option
        jQuery("#menuzord").menuzord();

        jQuery('#hero-slider').show().revolution({

            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            sliderLayout: 'fullscreen',
            minHeight: "900",
            delay: 8000,

            /* basic navigation arrows and bullets */
            navigation: {
                arrows: {
                    enable: true,
                    style: 'hades',
                    tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
                },
                bullets: {
                    enable: true,
                    style: "hermes",
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5,
                }
            }
        });

        jQuery('#hero-slider-two').show().revolution({

            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            sliderLayout: 'fullscreen',
            minHeight: "900",
            delay: 6000,

            /* basic navigation arrows and bullets */
            navigation: {
                arrows: {
                    enable: true,
                    style: 'hades',
                },
                bullets: {
                    enable: true,
                    // style: "hermes",
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5,
                    style: 'metis',
                    tmp: '<span class="tp-bullet-img-wrap"><span class="tp-bullet-image"></span></span>'
                }
            },
            parallax: {
                type: 'mouse+scroll',
                origo: 'slidercenter',
                speed: 400,
                levels: [5, 10, 15, 20, 25, 30, 35, 40,
                    45, 46, 47, 48, 49, 50, 51, 55
                ],
                disable_onmobile: 'on'
            },
        });

        jQuery('#hero-slider-three').show().revolution({

            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            sliderLayout: 'fullscreen',
            minHeight: "900",
            delay: 8000,

            /* basic navigation arrows and bullets */
            navigation: {
                arrows: {
                    enable: true,
                    style: 'hades',
                    tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
                },
                bullets: {
                    enable: true,
                    style: "hermes",
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5,
                }
            }
        });

        jQuery('#hero-slider-four').show().revolution({

            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            sliderLayout: 'fullscreen',
            minHeight: "900",
            delay: 8000,

            /* basic navigation arrows and bullets */
            navigation: {
                arrows: {
                    enable: true,
                    style: 'hades',
                },
                bullets: {
                    enable: true,
                    style: "hermes",
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5,
                }
            }
        });

        $('#close-btn').click(function () {
            $('#search-overlay').fadeOut();
        });
        $('.search-dropdown').click(function () {
            $('#search-overlay').fadeIn();
        });

        /* ---------------------------------------------
         CONTACT FORM
         --------------------------------------------- */
        $('.contact-form').on('submit', function (e) {
            e.preventDefault();
            var $this = $(this);

            $('button[type="submit"]', this).attr('disabled', 'disabled');
            $('.ast_loader', this).fadeIn();

            var form_data = $this.serialize();

            var required = 0;
            $(".required", this).each(function () {
                if ($(this).val() === '') {
                    $(this).addClass('reqError');
                    required += 1;
                } else {
                    if ($(this).hasClass('reqError')) {
                        $(this).removeClass('reqError');
                        if (required > 0) {
                            required -= 1;
                        }
                    }
                }
            });

            if (required === 0) {
                $.ajax({
                    type: 'POST',
                    url: 'ajax/mail.php',
                    data: {
                        form_data: form_data
                    },
                    success: function (data) {
                        $('button[type="submit"]', $this).removeAttr('disabled');
                        $('.ast_loader', $this).fadeOut();

                        $this.remove('.ast_con_message');
                        $('.ast_con_message', $this).fadeIn().html('Congratulation! Message successfully sent.');
                        setTimeout(function () {
                            $('.ast_con_message', $this).fadeOut().html('');
                        }, 5000);
                    }
                });
            } else {
                $('button[type="submit"]', $this).removeAttr('disabled');
                $('.ast_loader', $this).fadeOut();
                $('.ast_con_message', $this).fadeOut().html('');
            }

        });
        $(".required").on('keyup', function () {
            $(this).removeClass('reqError');
        });

        if ($("body").hasClass('masonry') == true) {
            $('.grid').masonry({
                // options
                itemSelector: '.grid-item',
            });
        }
        $('.input-radio label').click(function () {
            $('.input-radio label').removeClass('selected');
            $(this).addClass('selected');
        });
        $('#custom_amount').click(function () {
            $('.input-radio label').removeClass('selected');
        });

        // Timer
        function makeTimer() {

            //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
            var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");
            endTime = (Date.parse(endTime) / 1000);

            var now = new Date();
            now = (Date.parse(now) / 1000);

            var timeLeft = endTime - now;

            var days = Math.floor(timeLeft / 86400);
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

            if (hours < "10") {
                hours = "0" + hours;
            }
            if (minutes < "10") {
                minutes = "0" + minutes;
            }
            if (seconds < "10") {
                seconds = "0" + seconds;
            }

            $("#days").html(days + "<span>Days</span>");
            $("#hours").html(hours + "<span>Hours</span>");
            $("#minutes").html(minutes + "<span>Minutes</span>");
            $("#seconds").html(seconds + "<span>Seconds</span>");

        }

        setInterval(function () {
            makeTimer();
        }, 1000);

        var btn = $('#top-button');

        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '300');
        });
    });

    // Sticky Nav
    // Sticky Nav
    if ($('.home-one').length) {
        jQuery(window).on('scroll', function () {
            'use strict';
            if (jQuery(window).scrollTop() > 200) {
                jQuery('#header-bottom').addClass('animated fadeInDown sticky');
            } else {
                jQuery('#header-bottom').removeClass('animated fadeInDown sticky');
            }
        });
    }
    if ($("body").hasClass('home-one') == false) {
        jQuery(window).on('scroll', function () {
            'use strict';
            if (jQuery(window).scrollTop() > 60) {
                jQuery('#header-bottom').addClass('animated fadeInDown sticky');
            } else {
                jQuery('#header-bottom').removeClass('animated fadeInDown sticky');
            }
        });
    }


    // Preloader
    if ($('.preloader').length) {
        $(window).on('load', function () { // makes sure the whole site is loaded 
            $('.spinner').fadeOut('slow');
            $('.preloader').delay(400).fadeOut('slow');
        });
    }

})();