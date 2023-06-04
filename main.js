$(document).ready(function(){
    selectHomeMenu();
    onMenuClick();
});

function selectHomeMenu(){
    $('.header li a:first').addClass('active');
}

function onMenuClick(){
    const menu_links = $('.header li a');
    menu_links.on('click', function(){
        menu_links.removeClass('active');
        $(this).addClass('active');
    });
}