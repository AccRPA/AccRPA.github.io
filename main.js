$(document).ready(function(){
    $('.header li a:first').addClass('active');
    $('.header li a').on('click', function(){
        $('.header li a').removeClass('active');
        $(this).addClass('active');
    });
});