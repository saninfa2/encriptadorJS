//FUNCION ENCRIPTAR
function encriptar(){
    let texto = document.getElementById("input").value;
    let ninio = document.getElementById("ninio").value;
    let noneMensaje = document.getElementById("none-mensaje").value;
    let required = document.getElementById("required").value;

    let textoEncriptado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0){
        document.getElementById("output").value = textoEncriptado;
        document.getElementById("output-text").style.display = "inline";
        document.getElementById("none-output").style.display = "none";
    }
}


//FUNCION COPIAR
function copy(){
    var mensaje=document.getElementById('output');
    var button=document.getElementById("botonCopy");

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