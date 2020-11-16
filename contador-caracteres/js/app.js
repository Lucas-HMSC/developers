$('textarea').on('keyup paste', function(){
    setTimeout(function() {
        let valorTextArea = $('textarea').val().length,
            palavras = $('textarea').val().split(' ').length;
        $('.caracteres').text(valorTextArea);
        $('.palavras').text(palavras);
    }, 200);
});

$('.cxAlta').click(function cxAlta(){
    let textoAntes = $('textarea').val(),
        textoDepois = textoAntes.toUpperCase();
    document.querySelector('textarea').value = textoDepois;
});



