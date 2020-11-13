$(document).ready(function(){
    let classActive = 'active';
    
    $('.animais .tab-menu a').first().addClass(classActive);
    $('.animais .item').first().addClass(classActive);
    
    $('.animais .tab-menu a').click(function(e){
        e.preventDefault();
        let itemId = $(this).attr('href');

        $('.animais .tab-menu a, .item')
        .removeClass(classActive);
        $(this).addClass(classActive);
        $(itemId).addClass(classActive);
    });

    $('.florestas .tab-menu a').first().addClass(classActive);
    $('.florestas .item').first().addClass(classActive);
    
    $('.florestas .tab-menu a').click(function(e){
        e.preventDefault();
        let itemId = $(this).attr('href');

        $('.florestas .tab-menu a, .item')
        .removeClass(classActive);
        $(this).addClass(classActive);
        $(itemId).addClass(classActive);
    });
});