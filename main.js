$(document).ready(function(){
    selectHomeMenu();
    onMenuClick();
    onScroll();
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

function onScroll(){
    $(document).on('scroll', function(){
        const array = [];
        $('section#main > div').each(function(){
            array.push($(this));
        })

        const scrollTop = document.scrollingElement.scrollTop;
        
        let find = false;
        let sumHeight = 0;
        for (let i = 0; i < array.length && !find; i++){
            const id = array[i].prop('id');
            const height = array[i].height();
            sumHeight = sumHeight + height;
            
            const link = $('a[href="#' + id +'"]');
            const span = $('a[href="#' + id +'"] > span');
            const coordinate = scrollTop - sumHeight;
            if (coordinate < 0){
                // I can see this div
                const widthPercent = ((-coordinate) * 100) / height;
                //console.log(`index: ${i}, sumHeight: ${sumHeight}, scrollTop: ${scrollTop}, widthPercent: ${widthPercent}`);
                link.addClass('active');
                span.css('width', widthPercent + '%');
                find = true;
            }else{
                link.removeClass('active');
                span.css('width', '0%');
            }
        }
    })
}