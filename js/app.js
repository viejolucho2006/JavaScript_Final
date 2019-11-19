//Declaramos variables de operacion
var operandoa=0;
var operandob=0;
var operacion=0;
var resultado=0;	
x1=0; //variable para validar cero antes de un numero
coma=0; //estado decimal 0=no, 1=si;

//declaramos variables
function init(){
var resultado = document.getElementById('display');
var reset = document.getElementById('on');
var signo = document.getElementById('sign');
var punto  = document.getElementById('punto');
var suma = document.getElementById('mas');
var resta = document.getElementById('menos');
var multiplicacion = document.getElementById('por');
var division = document.getElementById('dividido');
var raiz = document.getElementById('raiz');
var igual = document.getElementById('igual');	
var uno    = document.getElementById('1');
var dos    = document.getElementById('2');
var tres   = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco  = document.getElementById('5');
var seis   = document.getElementById('6');
var siete  = document.getElementById('7');
var ocho   = document.getElementById('8');
var nueve  = document.getElementById('9');
var cero   = document.getElementById('0');



uno.addEventListener('mousedown', function(e) {
		document.getElementById('1').style="width:29%;height: 62.50px;";
		addEventListener('mouseup', function() {
		document.getElementById('1').style="width:29%;height: 62.91px;";
		});
	});
	  
dos.addEventListener('mousedown', function(e) {
		document.getElementById('2').style="width:29%;height: 62.50px;";
		addEventListener('mouseup', function() {
		document.getElementById('2').style="width:29%;height: 62.91px;";
		});
	});
	
tres.addEventListener('mousedown', function() {
		document.getElementById('3').style="width:29%;height: 62.50px;";
		addEventListener('mouseup', function() {
		document.getElementById('3').style="width:29%;height: 62.91px;";
		});
	});	

cuatro.addEventListener('mousedown', function() {
		document.getElementById('4').style="width:22%;height: 62.50px;";
		addEventListener('mouseup', function() {
		document.getElementById('4').style="width:22%;height: 62.91px;";
		});
	});
	  
cinco.addEventListener('mousedown', function() {
		document.getElementById('5').style="width:22%;height: 62.50px;";
		addEventListener('mouseup', function() {
		document.getElementById('5').style="width:22%;height: 62.91px;";
		});
	});
	
seis.addEventListener('mousedown', function() {
		document.getElementById('6').style="width:22%;height: 62.50px;";
		addEventListener('mouseup', function() {
		document.getElementById('6').style="width:22%;height: 62.91px;";
		});
	});	

siete.addEventListener('mousedown', function() {
		document.getElementById('7').style="width:22%;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('7').style="width:22%;height: 62.91px;";
		});
	});
	  
ocho.addEventListener('mousedown', function() {
		document.getElementById('8').style="width:22%;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('8').style="width:22%;height: 62.91px;";
		});
	});
	
nueve.addEventListener('mousedown', function() {
		document.getElementById('9').style="width:22%;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('9').style="width:22%;height: 62.91px;";
		});
	});	
cero.addEventListener('mousedown', function() {
		document.getElementById('0').style="width:29%;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('0').style="width:29%;height: 62.91px;";
		});
	});	

punto.addEventListener('mousedown', function() {
		document.getElementById('punto').style="width:29%;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('punto').style="width:29%;height: 62.91px;";
		});
	});	
	
igual.addEventListener('mousedown', function() {
		document.getElementById('igual').style="width:29%;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('igual').style="width:29%;height: 62.91px;";
		});
	});	
	
	
suma.addEventListener('mousedown', function() {
		document.getElementById('mas').style="width:90%;height: 99%;";
		addEventListener('mouseup', function() {
		document.getElementById('mas').style="width:90%;height: 100%;";
		});
	});		
	
resta.addEventListener('mousedown', function() {
		document.getElementById('menos').style="width:22%;height: 62.50px;";
		addEventListener('mouseup', function() {
		document.getElementById('menos').style="width:22%;height: 62.91px;";
		});
	});	

multiplicacion.addEventListener('mousedown', function() {
		document.getElementById('por').style="width:22%;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('por').style="width:22%;height: 62.91px;";
		});
	});		

reset.addEventListener('mousedown', function() {
		document.getElementById('on').style="width:22%;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('on').style="width:22%;height: 62.91px;";
		});
	});		

signo.addEventListener('mousedown', function() {
		document.getElementById('sign').style="width:22%;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('sign').style="width:22%;height: 62.91px;";
		});
	});		
	
	
raiz.addEventListener('mousedown', function() {
		document.getElementById('raiz').style="width:22%;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('raiz').style="width:22%;height: 62.91px;";
		});
	});		

	
division.addEventListener('mousedown', function() {
		document.getElementById('dividido').style="width:22%;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('dividido').style="width:22%;height: 62.91px;";
		});
	});		
	
//cargar los numeros para la operacion	

uno.onclick = function(e){
	if(x1==0){
		resultado.textContent = "1";
		x1=1;
		coma=1;
	}else{
		resultado.textContent = resultado.textContent  + "1";
		}
}
	  
dos.onclick = function(e){
	if(x1==0){
		resultado.textContent = "2";
		x1=1;
		coma=1;
	}else{
		resultado.textContent = resultado.textContent  + "2";
		}
}

tres.onclick = function(e){
	if(x1==0){
		resultado.textContent = "3";
		x1=1;
		coma=1;
	}else{
		resultado.textContent = resultado.textContent  + "3";
		}
}

cuatro.onclick = function(e){
	if(x1==0){
		resultado.textContent = "4";
		x1=1;
	}else{
		resultado.textContent = resultado.textContent  + "4";
		}
}

cinco.onclick = function(e){
	if(x1==0){
		resultado.textContent = "5";
		x1=1;
	}else{
		resultado.textContent = resultado.textContent  + "5";
		}
}

seis.onclick = function(e){
	if(x1==0){
		resultado.textContent = "6";
		x1=1;
	}else{
		resultado.textContent = resultado.textContent  + "6";
		}
}

siete.onclick = function(e){
	if(x1==0){
		resultado.textContent = "7";
		x1=1;
	}else{
		resultado.textContent = resultado.textContent  + "7";
		}
}

ocho.onclick = function(e){
	if(x1==0){
		resultado.textContent = "8";
		x1=1;
	}else{
		resultado.textContent = resultado.textContent  + "8";
		}
}

	  
nueve.onclick = function(e){
	if(x1==0){
		resultado.textContent = "9";
		x1=1;
	}else{
		resultado.textContent = resultado.textContent  + "9";
		}
}

cero.onclick = function(e){
	if(x1==0){
		resultado.textContent = "0";
	}else{
		resultado.textContent = resultado.textContent  + "0";
		}
}

punto.onclick = function(e){
	if (x1==0 && coma==0) { //si escribimos una coma decimal pòr primera vez
					   resultado.textContent = "0.";
					   resultado.textContent = resultado.textContent;
					   coma=1; //cambiar el estado de la coma  
					   x1=1;
				   }
	//si intentamos escribir una segunda coma decimal no realiza ninguna acción.
				   else if (x1==1 && coma==1){
						resultado.textContent = resultado.textContent + "." ;
				   }			   
				
}


//operadores logicos
	  	  		  		  	
on.onclick = function(e){
          resetear();
}

suma.onclick = function(e){
	operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
	x1=0;
	coma=0;
}

resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
	x1=0;
	coma=0;
}

multiplicacion.onclick = function(e){
	operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
	x1=0;
	coma=0;
}

division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
	x1=0;
	coma=0;
}

igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}		  		  		  	
		  		  		  	

function limpiar(){
  resultado.textContent = "0";
}

function resetear(){
  resultado.textContent = "0";
  operandoa = 0;
  operandob = 0;
  operacion = "";
  x1=0;
  coma=0;
}						
							
 function resolver(){
      var res = 0;
    switch(operacion){
        case "+":
          res = parseFloat(operandoa) + parseFloat(operandob);
          break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
          res = parseFloat(operandoa) * parseFloat(operandob);
          break;
        case "/":
          res = parseFloat(operandoa) / parseFloat(operandob);
          break;
      }
      resetear();
      resultado.textContent = res;
    }	


	
}		
	
	
	