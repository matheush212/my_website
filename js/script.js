function tabControl(home, who_are, portifolio, contact){
    document.getElementById("home_content").style.setProperty("display", home);
    document.getElementById("who_are_content").style.setProperty("display", who_are);
    document.getElementById("portifolio_content").style.setProperty("display", portifolio);
    document.getElementById("contact_content").style.setProperty("display", contact);
}


$(function(){
    var stickyHeaderTop = $('#menu_header').offset().top;

    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('#menu_header').css({position: 'fixed', top: '0px'});
        } else {
            $('#menu_header').css({position: 'static', top: '0px'});
        }
    });
});