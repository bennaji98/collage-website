$(document).ready(function(){
    
    $('#close-btn').click(function(){
        $('.nav-links').animate({right : '-200px'},1000);
    })

    $('#menu-btn').click(function(){
        $('.nav-links').animate({right : '0px'},1000);
    })
})