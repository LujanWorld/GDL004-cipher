const vamosAPagCifrar= document.getElementById("pag-cifrar");
vamosAPagCifrar.addEventListener("click", function pagCifrar(){ 
   document.getElementById("primera-pag").style.display = "none";
   document.getElementById("segunda-pag").style.display = "block"; //oculta la segunda pagina
});

const vamosAPagDescifrar= document.getElementById("pag-descifrar");
vamosAPagDescifrar.addEventListener("click", function pagDescifrar(){
   document.getElementById("primera-pag").style.display = "none";
   document.getElementById("tercera-pag").style.display = "block";
});

const vamosAPag1A= document.getElementById("a-pag1");
vamosAPag1A.addEventListener("click", function pag1(){
   document.getElementById("primera-pag").style.display = "block";
   document.getElementById("segunda-pag").style.display = "none"; 
});

let btnCopy = document.getElementById("btn-copy");

btnCopy.addEventListener("click", () => {
   var aux = document.getElementById("resultado-c");
   aux.select();
   // Copia el texto seleccionado
   document.execCommand("copy");
});

const vamosAPag1B= document.getElementById("b-pag1");
vamosAPag1B.addEventListener("click", function pag1B(){
   document.getElementById("primera-pag").style.display = "block";
   document.getElementById("tercera-pag").style.display = "none";
});
let btnCopyD = document.getElementById("btn-copy-d");

btnCopyD.addEventListener("click", () => {
   var aux = document.getElementById("resultado");
   aux.select();
   // Copia el texto seleccionado
   document.execCommand("copy");
});
//cifrado
const resultadoCifrado = document.getElementById("resultado-c");
const vamosACifrar = document.getElementById("vamos-cifrar");
vamosACifrar.addEventListener("click", ()=>{
  const numS = document.getElementById("put-number1").value;
  const ingresaMensaje1 = document.getElementById("ingresa-mensaje").value;
  resultadoCifrado.innerHTML = cipher.encode(parseInt(numS),ingresaMensaje1);
});
//descifrado
const resultadoDescifrado = document.getElementById("resultado");

const vamosADescifrar = document.getElementById("vamos-descifrar");
vamosADescifrar.addEventListener("click", ()=>{
  const numP = document.getElementById("put-number2").value;
  const ingresaMensaje = document.getElementById("ingresa-mensaje2").value;
  resultadoDescifrado.innerHTML = cipher.decode(parseInt(numP),ingresaMensaje);
});
