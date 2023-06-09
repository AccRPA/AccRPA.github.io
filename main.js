var clickNoScroll = false;
// array with all the sections
const array = [];

$(document).ready(function(){
    loadSections();
    selectHomeMenu();
    onMenuClick();
    onScroll();
});

function loadSections(){
    $('section#main > div').each(function(){
        array.push($(this));
    });    
}

function selectHomeMenu(){
    activateMenuSection();
    //$('.header li a:first').addClass('active');
}

function onMenuClick(){
    const menu_links = $('.header li a');
    menu_links.on('click', function(){
        // for avoiding to execute the scroll code plus the scroll smooth movement when clicking on a link
        clickNoScroll = true;
        menu_links.removeClass('active');
        $(this).addClass('active');  
        // scrolling to the section      
        const section = $('div[id="' + $(this).prop('role') + '"');
        // plus 50pc from the header
        $('html, body').scrollTop(section.offset().top - 50); 
    });
}

function onScroll(){
    $(window).on('scroll', function(){
        // to detect when the scroll movement has finished
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            // once the scroll movement is finished, reset the variable 
            clickNoScroll = false;
        }, 250));

        // if the user didn't click on the menu, excecute this scroll code
        if (!clickNoScroll){
            activateMenuSection();
        }
    });
}

function activateMenuSection(){
    const scrollTop = document.scrollingElement.scrollTop;
    let find = false;        
    for (let i = 0; i < array.length && !find; i++){
        // checking in which section is the scroll
        const id = array[i].prop('id');
        const link = $('a[role="' + id +'"]');
        const height = array[i].height();               
        const min = (i * height);
        const max = (min + height);
        if (scrollTop >= min && scrollTop < max){
            link.addClass('active');                    
        }else{
            link.removeClass('active');
        }
    }
}