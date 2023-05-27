//FUNCION ENCRIPTAR
function encriptar(){
    let texto = document.getElementById("input").value;

    let textoEncriptado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");


    if (texto.length != 0){
        document.getElementById("output").value = textoEncriptado;
        document.getElementById("output-text").style.display = "block";
        document.getElementById("none-output").style.display = "none";
    }
    //button.textContent="Copiar";
}

//FUNCION DESENCRIPTAR
function desencriptar(){
    let texto = document.getElementById("input").value;

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0){
        document.getElementById("none-output").style.display = "none";
        document.getElementById("output-text").style.display = "block";
        document.getElementById("output").value = textoCifrado;
    }
    //button.textContent="Copiar";
}

//FUNCION COPIAR
function copy(){
    let mensaje=document.getElementById('output');
    let button=document.getElementById("botonCopy");

    navigator.clipboard.writeText(mensaje.value);
    button.textContent="Copiado";

}


//CONTADOR DE CARACTERES
function countChars(obj){
    document.getElementById("charNum").innerHTML = obj.value.length+'/200';
    if (obj.value.length >= 200){
        document.getElementById("charNum").innerHTML = '<span style="color: #0A3871;">200/200</span>';
    } 
}
