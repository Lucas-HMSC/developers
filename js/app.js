/*
* Author: Lucas-HMSC    
* Curso: JavaScript com jQuery (Origamid)
*/

// Debounce do Lodash
debounce = function(func, wait, immediate) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Mudar TAB ao CLICK
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

// Scroll suave para link interno
$('.menu-nav a[href^="#"]').click(function(e){
    e.preventDefault();
    let id = $(this).attr('href'),
        menuHeight = $('.menu').innerHeight(),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500)
});

// Scroll suave para o topo
$('.logo').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 500)
});

// Muda o menu para active de acordo com a área
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

// Botão do menu mobile
$('.mobile-btn').click(function(){
    $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('active');
});

// Slider
(function(){
    function slider (sliderName, velocidade) {
        let sliderClass = '.' + sliderName,
            activeClass = 'active',
            rotate = setInterval(rotateSlide, velocidade);

        $(sliderClass + ' > :first').addClass(activeClass);

        $(sliderClass).hover(function(){
            clearInterval(rotate);
        }, function(){
            rotate = setInterval(rotateSlide, velocidade);
        });

        function rotateSlide() {
            let activeSlide = $(sliderClass + ' > .' + activeClass),
                nextSlide = activeSlide.next();
            
            if (nextSlide.length == 0) {
                nextSlide = $(sliderClass + ' > :first');
            }

            activeSlide.removeClass(activeClass);
            nextSlide.addClass(activeClass);
        }
    }

    slider('introducao', 2000);
})();

// Animação ao Scroll
(function(){
    let $target = $('[data-anime="scroll"]'),
        animationClass = 'animate',
        offset = $(window).height() * 3/4;

    function animeScroll() {
        let documentTop = $(window).scrollTop();
        $target.each(function(){
            let itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        });
    }

    animeScroll();

    $(document).scroll(function() {
        animeScroll();
    });
})();
