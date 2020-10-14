
var num = [];
var arreglo = [];


function setup() {

  var canva = createCanvas(windowWidth,windowHeight);
  canva.background( 255, 255, 255 );
  canva.parent('dibujar');

}



function draw() {
for (var i = 0; i < num.length; i++) {
  fill(66+(i*10), 1+(i*10), 255);
  textSize(32);
  noStroke();
  //     x   y   w      h 
  rect(60*(i+3),100,40,num[i]*10);
      //String  x    y 
  text(num[i], (60*(i+3))+5,80);

      }

      showArreglo();
}

function aleatorio(){
  arreglo = [];
  clear();
  fondo();
  for(let i=1; i<16; i++){
    num[i] = int(random(1,35));
  }
  console.log(num);

  
}

function ordenar(){
  let i,j,aux;

       for(i=1;i<16;i++){
      for(j=0;j<16;j++){
        if(num[j]>num[j+1]){
            aux = num[j]; 
            num[j] = num[j+1];
            num[j+1] = aux;

            }

          }
     
        }

        arreglo = num.slice();
        num =  [];
        clear();
        fondo();

}


function fondo(){
  canva = createCanvas(windowWidth,windowHeight);
  canva.background( 255, 255, 255 );
  canva.parent('dibujar');
}

function showArreglo(){
  for (var i = 0; i <arreglo.length; i++) {
  fill(66+(i*10), 1+(i*10), 255);
  textSize(32);
  noStroke();
  //     x   y   w      h 
  rect(60*(i+3),100,40,arreglo[i]*10);
  
      //String  x    y 
    text(arreglo[i], (60*(i+3))+5,80);
    
      }
}

function pasoDer(){
  let i = 1;
  while(i<16){
    for(j=0;j<16;j++){
      if(num[j]>num[j+1]){
          aux = num[j]; 
        num[j] = num[j+1];
        num[j+1] = aux;
        }
    }
    i++;
    break;
  } 
    arreglo = num.slice();

    clear();
    fondo();
}

function pasoIzq(){
  let i = 1;
  while(i<15){
    for(j=0;j<15;j++){
      if(num[j]<num[j+1]){
          aux = num[j]; 
        num[j] = num[j+1];
        num[j+1] = aux;
        }
    }
    i++;
    break;
  } 

    arreglo = num.slice();
    clear();
    fondo();
}

