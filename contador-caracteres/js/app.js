$('textarea').on('keyup paste', function(){
    setTimeout(function() {
        let valorTextArea = $('textarea').val().length,
            palavras = $('textarea').val().split(' ').length;
        $('.caracteres').text(valorTextArea);
        $('.palavras').text(palavras);
    }, 200);
});