const inputTexto = document.querySelector("#ingresar-texto");
var mensaje = document.querySelector('#columna-derecha');


function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.textContent = textoEncriptado;
}
function encriptar(TextoAEncriptar){
   let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]]
   TextoAEncriptar = TextoAEncriptar.toLowerCase();
for (let i = 0; i< matrizCodigo.length; i++){
    if(TextoAEncriptar.includes(matrizCodigo[i][0])){
        TextoAEncriptar = TextoAEncriptar.replaceAll
        (matrizCodigo[i][0],matrizCodigo[i][1])
    }
}
return TextoAEncriptar;
}

//AHORA PARA DESENCRIPTAR==

function btnDes(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.textContent = textoEncriptado;
}
function desencriptar(TextoAEncriptar){
   let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat","u"]]
   TextoAEncriptar = TextoAEncriptar.toLowerCase();
for (let i = 0; i< matrizCodigo.length; i++){
    if(TextoAEncriptar.includes(matrizCodigo[i][0])){
        TextoAEncriptar = TextoAEncriptar.replaceAll
        (matrizCodigo[i][0],matrizCodigo[i][1])
    }
}
return TextoAEncriptar;
}
