/**
* Template Name: Arsha - v2.3.0
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(50).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 2;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;
        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Skills section
  $('.detailbar').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

  $('#media').on('change', function() {
    if(this.value=='p2'){
      $("#noTelepon").addClass('displayUnHide').removeClass('displayHide');
      $("#noRekening").addClass('displayHide').removeClass('displayUnHide');

      $("#formTelepon").addClass('displayUnHide').removeClass('displayHide');
      $("#formRekening").addClass('displayHide').removeClass('displayUnHide');
    }else{
      $("#noRekening").addClass('displayUnHide').removeClass('displayHide');
      $("#noTelepon").addClass('displayUnHide').removeClass('displayHide');

      $("#formRekening").addClass('displayUnHide').removeClass('displayHide');
      $("#formTelepon").addClass('displayUnHide').removeClass('displayHide');
    }
  });

  $('#kronologi').on('keyup', function(){
    var maxWords = 1000;
    var len = $('#kronologi').val().length;
    if (len >= maxWords) {
      $('#countRow').text('');
    } else {
      var char = maxWords-len;
      $('#countRow').text(char + ' Karakter yang tersisa');
    }
  });

  $('#ulasan').on('keyup', function(){
    var maxWords = 250;
    var len = $('#ulasan').val().length;
    if (len >= maxWords) {
      $('#ulasanCountRow').text('');
    } else {
      var char = maxWords-len;
      $('#ulasanCountRow').text(char + ' Karakter yang tersisa');
    }
  });

  $('#selectKategori').on('change', function(){
    if (this.value=='1') {
      $('#titleKategori').text('Rekening');
    }else{
      $('#titleKategori').text('Telepon');
    }
  });

  $('#selectKategori').on('change', function(){
    if (this.value=='1') {
      $('#titleKategori').text('Rekening');
    }else{
      $('#titleKategori').text('Telepon');
    }
  });

  $('input[type=radio][name=faq]').change(function(){

    var faq = $('input[name="faq"]:checked').val();
    if (faq==1) {
      $('#faqPelaporan').addClass('displayUnHide').removeClass('displayHide');
      $('#faqRekan').addClass('displayHide').removeClass('displayUnHide');
    }else if (faq==2){
      $('#faqTitle').text('Konsultasi Hukum');
    }else{
      $('#faqRekan').addClass('displayUnHide').removeClass('displayHide');
      $('#faqPelaporan').addClass('displayHide').removeClass('displayUnHide');
    }

  });

  $('#ratingStar1').click(function(){var a = $('#ratingStar1 span').text(); $('#ratingInput').val(a); }); 
  $('#ratingStar2').click(function(){var a = $('#ratingStar2 span').text(); $('#ratingInput').val(a); });
  $('#ratingStar3').click(function(){var a = $('#ratingStar3 span').text(); $('#ratingInput').val(a); }); 
  $('#ratingStar4').click(function(){var a = $('#ratingStar4 span').text(); $('#ratingInput').val(a); }); 
  $('#ratingStar5').click(function(){var a = $('#ratingStar5 span').text(); $('#ratingInput').val(a); }); 
  
})(jQuery);