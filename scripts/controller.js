var ctx;var width = 320;
var des;
var height=320;
var intervalId;
var barraCodigo =0;
var semaforoCodigo =1;
var zetea =18;
var semaforoLineas =1;
var semaforor = -1;
var explicacion = new Array();
var  teclado = 'newScanner(System.in)';
var  frase = '';
var  largo = 0;
var  i = 0;
var  c = '';
explicacion[0] = 'Se importa el java util';
explicacion[1] = 'Se crea la clase ProyectoiLO01';
explicacion[2] = 'Se crea el metodo principal';
explicacion[3] = 'Se crea el objeto teclado para capturar lo del usuario';
explicacion[4] = 'Se imprime Ingrese Frase';
explicacion[5] = 'Se obtiene lo del usuario';
explicacion[6] = 'Se calcula el largo de la frase';
explicacion[7] = 'se imprime la frase';
explicacion[8] = 'Se imprime resultado';
explicacion[9] = 'se setea i';
explicacion[10] = 'se setea el char';
explicacion[11] = 'se recorre el bucle';
explicacion[12] = 'se obtiene la letra en la posicion i';
explicacion[13] = 'se imprime c';
explicacion[14] = 'se suma un 1 a i';
explicacion[15] = '';
explicacion[16] = '';
explicacion[17] = '';
var iniciclo11=11;
var finciclo15=15;
function draw(){
ctx.strokeRect(0,0,700,400);
};
function init(){
ctx = document.getElementById('canvas').getContext('2d');
des = document.getElementById('canvas').getContext('2d');
 intervalId = setInterval(draw, 10);
};
function cargado(){
if(semaforoCodigo == 1){
var objetoCanvas = document.getElementById('canvas');
if(objetoCanvas.getContext){
var contextoCanvas = objetoCanvas.getContext('2d')
contextoCanvas.font = '20px Times New Roman';
contextoCanvas.textAlign='left';
 contextoCanvas.fillText('import java.util.*;',10,40);
 contextoCanvas.fillText('public class ProyectoiLO01{',10,60);
 contextoCanvas.fillText('  public static void main (String args[]){',10,80);
 contextoCanvas.fillText('    Scanner teclado = new Scanner(System.in);',10,100);
 contextoCanvas.fillText('    System.out.print("Ingrese frase: ");',10,120);
 contextoCanvas.fillText('    String frase= teclado.nextLine();',10,140);
 contextoCanvas.fillText('    int largo = frase.length();',10,160);
 contextoCanvas.fillText('    System.out.println(frase);',10,180);
 contextoCanvas.fillText('    System.out.println("Resultado:");',10,200);
 contextoCanvas.fillText('    int i = 0;',10,220);
 contextoCanvas.fillText("    char c = ' ';",10,240);
 contextoCanvas.fillText('    while(i<largo){',10,260);
 contextoCanvas.fillText('        c = frase.charAt(i);',10,280);
 contextoCanvas.fillText('        System.out.println(c);',10,300);
 contextoCanvas.fillText('        i = i +1;',10,320);
 contextoCanvas.fillText('    }',10,340);
 contextoCanvas.fillText('  }',10,360);
 contextoCanvas.fillText('}',10,380);
semaforoCodigo = 2;
}
}
};
function Siguiente(){
if(semaforoLineas <= zetea){
des.strokeStyle = '#CCCC00';
 des = document.getElementById('canvas').getContext('2d');
if(barraCodigo != 0){
des.clearRect (0, 0,  700, 400);
 semaforoCodigo=1;
 cargado();
}
barraCodigo = barraCodigo + 20;
semaforor=semaforor+1;
des.strokeRect(5,barraCodigo, 690, 20);
document.getElementById('texplicacion').value = explicacion[semaforor];
 if(semaforor==3){
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + 'Scanner teclado  =  new Scanner(System.in);';
}
 if(semaforor==4){
document.getElementById('tejecucion').value = document.getElementById('tejecucion').value +  salto() + "Ingrese frase: ";
}
if(semaforor==5){
 mostrar('No','botones');
 mostrar('Si','input');
}
 if(semaforor==5+1){
frase =  document.getElementById("tinput").value;
document.getElementById('tmemoria').value =  document.getElementById('tmemoria').value + salto() + 'String frase = ' + ' ' + document.getElementById("tinput").value;
}
 if(semaforor==6){
  largo =  Math.floor( frase.length);
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + 'int largo  = ' + largo;
}
 if(semaforor==7){
document.getElementById('tejecucion').value = document.getElementById('tejecucion').value +  salto() + frase;
}
 if(semaforor==8){
document.getElementById('tejecucion').value = document.getElementById('tejecucion').value +  salto() + "Resultado:";
}
 if(semaforor==9){
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + 'int i  =  0;';
}
 if(semaforor==10){
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + "char c  =  ' ';";
}
 if(semaforor==12){
  c =   frase.charAt(i);;
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + 'c  = ' + c;
}
 if(semaforor==13){
document.getElementById('tejecucion').value = document.getElementById('tejecucion').value +  salto() + c;
}
 if(semaforor==14){
  i =   i +1;;
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + 'i  = ' + i;
}
if(semaforor==iniciclo11 && !(i<largo)){
semaforor=finciclo15;
semaforoLineas = semaforoLineas + ((finciclo15) - (iniciclo11));
barraCodigo = barraCodigo + (20 *((finciclo15) - (iniciclo11)));}
else{semaforor=semaforor;}
if(semaforor==finciclo15 && i<largo){
semaforor=iniciclo11 -1;
semaforoLineas = semaforoLineas - ((finciclo15) - (iniciclo11 -1));
barraCodigo = barraCodigo - (20 *((finciclo15) - (iniciclo11 -1)));}
else{semaforor=semaforor;}
semaforoLineas = semaforoLineas+1;
}
else
{
alert('Se ha acabado el programa');
}
}
function Anterior(){
if(semaforoLineas > 2){
des= document.getElementById('canvas').getContext('2d');
if(barraCodigo >= 20){
des.clearRect (0, 0,  700, 400);
semaforoCodigo=1;
cargado();
}
 barraCodigo = barraCodigo - 20;
semaforor=semaforor-1;
des.strokeRect(5,barraCodigo, 690, 20);
document.getElementById('texplicacion').value = explicacion[semaforor];
semaforoLineas = semaforoLineas-1;
}
else{
alert('Comienzo del programa');
}
}
