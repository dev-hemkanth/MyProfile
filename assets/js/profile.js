function closeOffCanvasNav() {
    $('#offcanvasCloseBtn').click()
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