$(function ($) {
  "use strict";

  jQuery(document).ready(function () {

    // Toggle Menu for Mobile
    $(".toggle-icon").on("click", function () {
      $(".my-navbar").toggleClass("active"); // Changed from show to active to match CSS
      $(".mainmenu-area").toggleClass("active"); // Changed from show to active to match CSS
      $("#nav-icon3").toggleClass("open");
    });

    // Navigation logic using href IDs instead of nth-child
    $(".my-navbar .mynav-item").on("click", function (e) {
      if (!$(this).hasClass("active")) {
        // Update active menu item
        $(".my-navbar .mynav-item").removeClass("active");
        $(this).addClass("active");

        // Get the target section ID from the link's href
        var targetId = $(this).find("a").attr("href");

        // Switch active section
        $("#main > section.active").removeClass("active");
        $(targetId).addClass("active");

        // Close mobile menu if open
        $(".my-navbar").removeClass("active");
        $(".mainmenu-area").removeClass("active");
        $("#nav-icon3").removeClass("open");
      }
      e.preventDefault();
    });

    // Handle "View Portfolio" button click
    $("a[href='#portfolio']").on("click", function (e) {
      e.preventDefault();

      // Activate Portfolio Menu Item
      $(".my-navbar .mynav-item").removeClass("active");
      $(".my-navbar .mynav-item.portfolio").addClass("active");

      // Show Portfolio Section
      $("#main > section.active").removeClass("active");
      $("#portfolio").addClass("active");
    });

    // Handle "Contact Me" button click
    $("a[href='#contact']").on("click", function (e) {
      e.preventDefault();

      // Activate Contact Menu Item
      $(".my-navbar .mynav-item").removeClass("active");
      // Find the li containing the contact link
      $(".my-navbar .mynav-item a[href='#contact']").parent().addClass("active");

      // Show Contact Section
      $("#main > section.active").removeClass("active");
      $("#contact").addClass("active");
    });


    // Mixitup js for Portfolio filtering
    if ($(".project-gallery").length) {
      $(".project-gallery").mixItUp();
    }

    /* Typed.js Activation */
    var $typed = $("#typed");
    if ($typed.length > 0) {
      $typed.typed({
        strings: ["Websites.", "Web Apps.", "Backends.", "System Design."],
        stringsElement: null,
        typeSpeed: 70,
        startDelay: 150,
        backSpeed: 40,
        backDelay: 350,
        loop: true,
        loopCount: 550,
        showCursor: true,
        cursorChar: "|",
        attr: null,
        contentType: "html",
      });
    }

    // Statistics circle progressbar
    var $section = $("#statisticsSection");
    if ($section.length > 0) {
      $(".progress-circle").loading();
    }

    /* 
       Disabled Ajax Magnific Popup for now as we are using static cards.
       If you want to re-enable ajax content, uncomment the original code blocks.
       For now, we just initialize simple image popups if class exists.
    */
    $(".lightbox").magnificPopup({
      type: "image",
    });

  });

  $(window).on('load', function () {
    /* Preloader */
    var preLoder = $("#preloader");
    preLoder.addClass('hide');
  });

});