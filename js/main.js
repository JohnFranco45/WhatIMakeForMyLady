$(document).ready(function(){
    
    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');
    
    // click event on toggle-menu

    $toggleCollapse.click(function() {
        $nav.toggleClass("collapse");
    })

    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 4000,
  
    });

});


