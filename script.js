const inputTexto = document.querySelector("#ingresar-texto");
const mensaje = document.querySelector("#columna-derecha");


function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
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
