var arreglo = []; 
var fsuma,fresta,fmulti,fdiv,fraiz;
var rsuma,rresta,rmulti,rdiv;

function setup() {

  let fondo = createCanvas(424,93);
  background(255,0.1);
  fondo.position(547,30); 
  printTexto();
  arreglo[0] = ""; 

}

function draw() {
  for (var i = 0; i < arreglo.length; i++) {
    text('  ' + arreglo[i], i*30,65);
      }
  }


function button(val) {
  for(i=0;i<10;i++){
    if(val==i){ 
      if(arreglo.length>1){
            arreglo[arreglo.length] = val;
        }else{
            arreglo[1] = val;
          }
      }
  }
  
switch(val){
    case '+':
       if(arreglo.length>1){
         arreglo[arreglo.length] = val;
   }else{
       arreglo[1] = '+';
    }
    break;

    case '-':
      if(arreglo.length>1){
         arreglo[arreglo.length] = val;
   }else{
       arreglo[1] = '-';
    }
    break;

    case '*':
      if(arreglo.length>1){
         arreglo[arreglo.length] = val;
   }else{
       arreglo[1] = '*';
    }
    break;

    case '/':
      if(arreglo.length>1){
         arreglo[arreglo.length] = val;
   }else{
       arreglo[1] = '/';
    }
    break;

    case '√':
      if(arreglo.length>1){
         arreglo[arreglo.length] = val;
   }else{
       arreglo[1] = '√';
    }
    break;

    case 'c':
      if(arreglo.length>1){
        arreglo =  [];
        arreglo[0] = "";
        clear();
        printTexto();
   }
    break;

  }

  if(val=='='){
     if(arreglo.length>2){
       for(i=0; i<arreglo.length; i++){
         if(arreglo[i]=='+'){
            fsuma = true;
            condicionBool(fsuma,rsuma,'+',suma);
         }else if (arreglo[i]=='-') {
           fresta = true;
           condicionBool(fresta,rresta,'-',resta);
         }else if(arreglo[i]=='*'){
           fmulti = true;
           condicionBool(fmulti,rmulti,'*',multi);
         }else if(arreglo[i]=='/'){
           fdiv = true;
           condicionBool(fdiv,rdiv,'/',div);
         }else if(arreglo[i]=='√'){
           fraiz = true;
         }
       }

  if(fraiz){
    for(i=0;i<arreglo.length;i++){
        if(arreglo[i]=='√'){
          arreglo[i] = "";
        }
      }
      cadena = splitTokens(arreglo.join(''), '√');
      rraiz = raiz(float(cadena));
      for(i=0; i<arreglo.length; i++){
      arreglo[i] = "";
     }
      clear();
      fraiz = false;
      text(rraiz,40,68);
  }

    } //fin if arreglo > 2

  } //fin if valor
}

function condicionBool(bandera, resultado, simbolo,accion){
   if(bandera){
     cadena = splitTokens(arreglo.join(''), simbolo);
     resultado = accion(int(cadena[0]),int(cadena[1]));
     for(i=0; i<arreglo.length; i++){
       arreglo[i] = "";
        }
       clear();
       bandera = false;
       text(resultado,40,68);
     }     
}


function suma(a, b){ 
  return a + b; 
}

function resta(a, b){ 
  return a - b; 
}

function multi(a,b){
  return a * b;
}

function div(a,b){
  return a/b;
}
function raiz(a){
  return sqrt(a,2);
}

function printTexto(){
  textSize(51);
  fill(255,255,255);
  text(' > ',10,65);
}

