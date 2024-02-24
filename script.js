var areaTexto1 = document.querySelector('#d1');
var areaTexto2 = document.querySelector('#d2');


function criptografar(){
    var texto = areaTexto1.value ;
    var resCripto  = texto.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober')
    .replace(/u/g,'ufat');
    
    document.getElementById('d2').innerHTML =  resCripto ;

} 
function descriptografar(){
    var texto = areaTexto1.value;
    var resulDescripto = texto.replace(/ufat/g,'u').replace(/ober/g,'o').replace(/imes/g,'i')
    .replace(/enter/g,'e').replace(/ai/g,'a');

    document.getElementById('d2').innerHTML = resulDescripto;

}
function copiar(){
    var copiarTexto = document.getElementById('d2');

    if (navigator.clipboard){
        navigator.clipboard.writeText(copiarTexto.value)
        .then(() => {
            alert('Texto copiado (Use : Ctrl + V ).');
        })
        .catch(err => {
            alert.error('Erro ao copiar:', err);
        });

    }else {
        copiarTexto.select();
        document.execCommand('copy');
        
    }

}
