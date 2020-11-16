$('textarea').on('keyup paste', function(){
    setTimeout(function() {
        let valorTextArea = $('textarea').val().length,
            palavras = $('textarea').val().split(' ').length;
        $('.caracteres').text(valorTextArea);
        $('.palavras').text(palavras);
    }, 200);
});

$('.cxAlta').click(function(){
    let textoAntes = $('textarea').val(),
        textoDepois = textoAntes.toUpperCase();
    document.querySelector('textarea').value = textoDepois;
});

$('.cxBaixa').click(function(){
    let textoAntes = $('textarea').val(),
        textoDepois = textoAntes.toLowerCase();
    document.querySelector('textarea').value = textoDepois;
});

$('.capitalizar').click(function(){
    let textoAntes = $('textarea').val().split(' ');
    let textoDepois = '';
    for (i in textoAntes) {
        let input = textoAntes[i],
            lower = input.toLowerCase(),
            pLetra = lower.slice(0, 1),
            cap = lower.replace(pLetra, pLetra.toUpperCase());
        textoDepois += cap + ' ';
    }
    document.querySelector('textarea').value = textoDepois;
    //console.log(textoDepois);
});

