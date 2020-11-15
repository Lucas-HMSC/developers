$('[data-group]').each(function(){
    let $allTarget = $(this).find('[data-target]'),
        $allClick = $(this).find('[data-click]'),
        activeClass = 'active';

    $allTarget.first().addClass(activeClass);
    $allClick.first().addClass(activeClass);

    $allClick.click(function(e){
        e.preventDefault();

        let id = $(this).data('click'),
            $target = $('[data-target="' + id + '"]');
        
        $allClick.removeClass(activeClass);
        $allTarget.removeClass(activeClass);

        $target.addClass(activeClass);
        $(this).addClass(activeClass);
    });
});

$('.menu-nav a[href^="#"]').click(function(e){
    e.preventDefault();
    let id = $(this).attr('href'),
        menuHeight = $('.menu').innerHeight(),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500)
});

$('.logo').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 500)
});

$('section').each(function(){
    let height = $(this).height(),
        offsetTop = $(this).offset().top,
        menuHeight = $('.menu').innerHeight(),
        id = $(this).attr('id'),
        $itemMenu = $('a[href="#' + id + '"]');
    
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();

        if (offsetTop - menuHeight < scrollTop && (offsetTop + height - menuHeight) > scrollTop) {
            $itemMenu.addClass('active');
        } else {
            $itemMenu.removeClass('active');
        }
    });
});

$('.mobile-btn').click(function(){
    $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('active');
});

$('.slide > :first').addClass('active');

function rotateSlide() {
    let activeSlide = $('.slide > .active'),
        nextSlide = activeSlide.next();
    
    if (nextSlide.length == 0) {
        nextSlide = $('.slide > :first');
    }

    activeSlide.removeClass('active');
    nextSlide.addClass('active');
}

setInterval(rotateSlide, 2000);