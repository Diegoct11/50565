grammar ColaLang;

programa: 'cola' nombre '{' comandos '}' ;
comandos: (operacion)* ;
operacion: encolar | desencolar | verPrimero | crear ;

crear: 'crear' '(' lista ')' '!' ;
encolar: 'encolar' '(' valor ')' '!' ;
desencolar: 'desencolar' '(' ')' '!' ;
verPrimero: 'verPrimero' '(' ')' '!' ;

lista: '[' (valor (',' valor)*)? ']' ;
valor: numero | texto ;

numero: DIGITO+ ;
texto: '"' CARACTER* '"' ;

nombre: LETRA (LETRA | DIGITO | SIMBOLO)* ;
LETRA: [a-zA-Z] ;
DIGITO: [0-9] ;
CARACTER: LETRA | DIGITO | SIMBOLO ;

SIMBOLO: [.,;:?!@#$%^&*()_+\-={}[\]|<>] ;

WS: [ \t\r\n]+ -> skip ;
