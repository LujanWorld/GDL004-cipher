window.cipher = { 
  encode:function cifrando(number1, cifrat) {//numero de caract, y el texto a cifrar
    let ascii;
      let newCifrat = "";
      let texto1; /*para aplicar la fórmula*/
      for ( let i=0; i<cifrat.length; i++ ) {
        ascii = cifrat.charCodeAt(i); //pasa a codigo ascii
        if ( ascii >= 65 && ascii <= 90) { // Mayúsculas 
           texto1 = (( ascii - 65 + number1 ) % 26) + 65; //offset es el número de posiciones que queremos mover a la derecha en el alfabeto
        }
        if( ascii>=32 && ascii<=63){ //signos
          texto1 = ascii;
        }
        if ( ascii >= 97 && ascii <= 122) { //minusculas
          texto1 = (( ascii - 97 + number1 ) % 26) + 97; //aplica la formula
       }
        newCifrat += String.fromCharCode(texto1); // pasa a letras
      }
      return newCifrat;
    },
  decode: function descifrando(number,descifrat) {
    let asciiD;
      let newDescifrat = "";
      let texto;
      for ( let i=0; i<descifrat.length; i++ ) {
        asciiD = descifrat.charCodeAt(i);
        if ( asciiD >= 65 && asciiD <= 90) {
           texto = (( asciiD - 90 - number ) % 26) + 90;
        }
        if ( asciiD>=32 && asciiD<=63){
          texto= asciiD;
        }
        if ( asciiD >= 97 && asciiD <= 122) {
          texto = (( asciiD - 122 - number ) % 26) + 122;// offset es el número de posiciones que queremos mover a la izquierda en el alfabeto 
       }
       newDescifrat += String.fromCharCode(texto);
      }
      return newDescifrat;
    },
};
