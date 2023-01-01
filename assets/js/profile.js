function closeOffCanvasNav() {
    $('#offcanvasCloseBtn').click();
    checkCurrentActive()
}

function scrollToTop() {
    $("html, body").animate({ scrollTop: 0 });
}


document.querySelector('body').onscroll = function(){
    if (window.scrollY > 150) {
        $('#scroll-top-button').addClass('show')
    } else {
        $('#scroll-top-button').removeClass('show')
    }
};

$(document).ready(setActiveClass());

// set active class
function setActiveClass() {
    $('.nav-link').click(function(e) {
        console.log($(this).parent())
        $('.nav-link.active').removeClass('active');
        var $parent = $(this).parent();
        $parent.children()[0].classList.add('active')
        // e.preventDefault();
    });
}

$(function($) {
    let url = window.location.href;
    $('.nav-link').each(function() {
      if (this.href === url) {
        $(this).closest('.nav-link').addClass('active');
      }
    });
});

// Check active class by url
function checkCurrentActive($) {
    let url = window.location.href;
    $('.nav-link').each(function() {
      if (this.href === url) {
        $(this).closest('.nav-link').addClass('active');
      }
    });
}