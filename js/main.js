var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var imagenBanner = document.querySelector(".img-banner");
var labelTextoNoEncontrado = document.querySelector("#label-texto-no-encontrado");
var labelIngresarTexto = document.querySelector("#label-ingresar-texto");
var botoncopiar = document.querySelector(".boton-copiar")

var textoEncriptado;
var textoDesencriptado;

botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    
    cadenaTexto = cajaTextoDiligenciado();

    textoEncriptado = cadenaTexto   
    .replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/a/g,"ai")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");

    imprimirTextoSalida(textoEncriptado);
    copiarTexto(textoEncriptado);
});
//====================================================================================================
botonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    
    cadenaTexto = cajaTextoDiligenciado();

    textoDesencriptado = cadenaTexto
    .replace(/enter/g,"e")
    .replace(/imes/g,"i")   
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");

    textoSalida = imprimirTextoSalida(textoDesencriptado);
    copiarTexto(textoDesencriptado);
});
//====================================================================================================
function cajaTextoDiligenciado(){   
    var textoIngresado = document.querySelector(".caja-texto").value;
    if(textoIngresado == ""){
        alert("Por favor ingrese el texto que desea encriptar.")
    }
    return textoIngresado;
}
//====================================================================================================
function imprimirTextoSalida(textoSalida){
    var textoSalidaTemporal = document.querySelector("#label-texto-salida");
    textoSalidaTemporal.textContent = textoSalida;
    
    if(textoSalida != ""){
        imagenBanner.classList.add("banner-off");
        labelTextoNoEncontrado.classList.add("lblTextoNoEncontrado-off");
        labelIngresarTexto.classList.add("lblIngresarTexto-off");
        botoncopiar.classList.add("boton-copiar-on");
    }
}
//====================================================================================================
function copiarTexto(textoSalida){
    botoncopiar.addEventListener("click",function(event){
        event.preventDefault();
        navigator.clipboard.writeText(textoSalida);
        console.log(textoSalida);
    })
}