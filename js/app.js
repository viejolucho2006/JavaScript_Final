var calculadora = {

//Declaramos variables globales
	pantalla: document.getElementById("display"),
	valorPantalla: "0",
	operacion: "",
	operandoA: 0,
	operandoB: 0,
	operandoC: 0,
	resultado: 0,
	masIgual: false, // Para permitir ingreso consecutivo
	
	init:(function(){
		this.CambioBotones(".tecla")
		this.numeros();
	}),

//Cambiar tamaño de botones
	CambioBotones:function(selector){
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
		var on_c = document.getElementById('on');
		var signo = document.getElementById('sign');
		var punto  = document.getElementById('punto');
		var suma = document.getElementById('mas');
		var resta = document.getElementById('menos');
		var multiplicacion = document.getElementById('por');
		var division = document.getElementById('dividido');
		var raiz = document.getElementById('raiz');
		var igual = document.getElementById('igual');	
		
		uno.addEventListener('mousedown', function(e) {
			document.getElementById('1').style="width:29%;height: 62.50px;";
			addEventListener('mouseup', function(e) {
			document.getElementById('1').style="width:29%;height: 62.91px;";
			});
		});
		
		dos.addEventListener('mousedown', function(e) {
			document.getElementById('2').style="width:29%;height: 62.50px;";
			addEventListener('mouseup', function(e) {
			document.getElementById('2').style="width:29%;height: 62.91px;";
			});
		});
		
		tres.addEventListener('mousedown', function(e) {
			document.getElementById('3').style="width:29%;height: 62.50px;";
			addEventListener('mouseup', function(e) {
			document.getElementById('3').style="width:29%;height: 62.91px;";
			});
		});	

		cuatro.addEventListener('mousedown', function(e) {
				document.getElementById('4').style="width:22%;height: 62.50px;";
				addEventListener('mouseup', function(e) {
				document.getElementById('4').style="width:22%;height: 62.91px;";
				});
			});
		  
		cinco.addEventListener('mousedown', function(e) {
				document.getElementById('5').style="width:22%;height: 62.50px;";
				addEventListener('mouseup', function(e) {
				document.getElementById('5').style="width:22%;height: 62.91px;";
				});
			});
			
		seis.addEventListener('mousedown', function(e) {
				document.getElementById('6').style="width:22%;height: 62.50px;";
				addEventListener('mouseup', function(e) {
				document.getElementById('6').style="width:22%;height: 62.91px;";
				});
			});	

		siete.addEventListener('mousedown', function(e) {
				document.getElementById('7').style="width:22%;height: 62px;";
				addEventListener('mouseup', function(e) {
				document.getElementById('7').style="width:22%;height: 62.91px;";
				});
			});
			  
		ocho.addEventListener('mousedown', function(e) {
				document.getElementById('8').style="width:22%;height: 62px;";
				addEventListener('mouseup', function(e) {
				document.getElementById('8').style="width:22%;height: 62.91px;";
				});
			});
			
		nueve.addEventListener('mousedown', function(e) {
				document.getElementById('9').style="width:22%;height: 62px;";
				addEventListener('mouseup', function(e) {
				document.getElementById('9').style="width:22%;height: 62.91px;";
				});
			});	
		cero.addEventListener('mousedown', function(e) {
				document.getElementById('0').style="width:29%;height: 62px;";
				addEventListener('mouseup', function(e) {
				document.getElementById('0').style="width:29%;height: 62.91px;";
				});
			});	

		punto.addEventListener('mousedown', function(e) {
				document.getElementById('punto').style="width:29%;height: 62px;";
				addEventListener('mouseup', function(e) {
				document.getElementById('punto').style="width:29%;height: 62.91px;";
				});
			});	
			
		igual.addEventListener('mousedown', function(e) {
				document.getElementById('igual').style="width:29%;height: 62px;";
				addEventListener('mouseup', function(e) {
				document.getElementById('igual').style="width:29%;height: 62.91px;";
				});
			});	
			
			
		suma.addEventListener('mousedown', function(e) {
				document.getElementById('mas').style="width:90%;height: 99%;";
				addEventListener('mouseup', function(e) {
				document.getElementById('mas').style="width:90%;height: 100%;";
				});
			});		
			
		resta.addEventListener('mousedown', function(e) {
				document.getElementById('menos').style="width:22%;height: 62.50px;";
				addEventListener('mouseup', function(e) {
				document.getElementById('menos').style="width:22%;height: 62.91px;";
				});
			});	

		multiplicacion.addEventListener('mousedown', function(e) {
				document.getElementById('por').style="width:22%;height: 62px;";
				addEventListener('mouseup', function(e) {
				document.getElementById('por').style="width:22%;height: 62.91px;";
				});
			});		

		on_c.addEventListener('mousedown', function(e) {
				document.getElementById('on').style="width:22%;height: 62px;";
				addEventListener('mouseup', function(e) {
				document.getElementById('on').style="width:22%;height: 62.91px;";
				});
			});		

		signo.addEventListener('mousedown', function(e) {
				document.getElementById('sign').style="width:22%;height: 62px;";
				addEventListener('mouseup', function(e) {
				document.getElementById('sign').style="width:22%;height: 62.91px;";
				});
			});		
			
			
		raiz.addEventListener('mousedown', function(e) {
				document.getElementById('raiz').style="width:22%;height: 62px;";
				addEventListener('mouseup', function(e) {
				document.getElementById('raiz').style="width:22%;height: 62.91px;";
				});
			});		

			
		division.addEventListener('mousedown', function(e) {
				document.getElementById('dividido').style="width:22%;height: 62px;";
				addEventListener('mouseup', function(e) {
				document.getElementById('dividido').style="width:22%;height: 62.91px;";
				});
			});		
	},
	//Fin Cambiar tamaño de botones
	
//cargar los numeros para la operacion	

uno.onclick = function(e){
	var str= pantalla.textContent;
	var n = str.length;
	if(x1==0){
		pantalla.textContent = "1";
		x1=1;
	}else if( x1==1 && n<8){
			pantalla.textContent = pantalla.textContent  + "1";
		}
}
	  
dos.onclick = function(e){
	var str= pantalla.textContent;
	var n = str.length;
	if(x1==0){
		pantalla.textContent = "2";
		x1=1;
	}else if( x1==1 && n<8){
			pantalla.textContent = pantalla.textContent  + "2";
		}
}

tres.onclick = function(e){
	var str= pantalla.textContent;
	var n = str.length;
	if(x1==0){
		pantalla.textContent = "3";
		x1=1;
	}else if( x1==1 && n<8){
			pantalla.textContent = pantalla.textContent  + "3";
		}
}

cuatro.onclick = function(e){
var str= pantalla.textContent;
	var n = str.length;
	if(x1==0){
		pantalla.textContent = "4";
		x1=1;
	}else if( x1==1 && n<8){
			pantalla.textContent = pantalla.textContent  + "4";
		}
}

cinco.onclick = function(e){
var str= pantalla.textContent;
	var n = str.length;
	if(x1==0){
		pantalla.textContent = "5";
		x1=1;
	}else if( x1==1 && n<8){
			pantalla.textContent = pantalla.textContent  + "5";
		}
}

seis.onclick = function(e){
var str= pantalla.textContent;
	var n = str.length;
	if(x1==0){
		pantalla.textContent = "6";
		x1=1;
	}else if( x1==1 && n<8){
			pantalla.textContent = pantalla.textContent  + "6";
		}
}

siete.onclick = function(e){
var str= pantalla.textContent;
	var n = str.length;
	if(x1==0){
		pantalla.textContent = "7";
		x1=1;
	}else if( x1==1 && n<8){
			pantalla.textContent = pantalla.textContent  + "7";
		}
}

ocho.onclick = function(e){
var str= pantalla.textContent;
	var n = str.length;
	if(x1==0){
		pantalla.textContent = "8";
		x1=1;
	}else if( x1==1 && n<8){
			pantalla.textContent = pantalla.textContent  + "8";
		}
}

	  
nueve.onclick = function(e){
	var str= pantalla.textContent;
	var n = str.length;
	if(x1==0){
		pantalla.textContent = "9";
		x1=1;
	}else if( x1==1 && n<8){
			pantalla.textContent = pantalla.textContent  + "9";
		}
}

cero.onclick = function(e){
	var str= pantalla.textContent;
	var n = str.length;
	if(x1==0){
		pantalla.textContent = "0";
	}else if( x1==1 && n<8){
			pantalla.textContent = pantalla.textContent  + "0";
		}
}

signo.onclick = function(e){
	if(x2==0){
		pantalla.textContent = (-1)*pantalla.textContent;
	}
}




punto.onclick = function(e){
	var str= pantalla.textContent;
	var arreglo = str.split(".");
	var size = arreglo.length;
	if (x1==0 ) { //si escribimos una coma decimal por primera vez
					   pantalla.textContent = "0.";
					   pantalla.textContent = pantalla.textContent;
					   console.log(pantalla.textContent);
					   x1=1;
				   }
	//si intentamos escribir una segunda coma decimal no realiza ninguna acción.
				   else if  (x1==1 && size<2) {
						pantalla.textContent = pantalla.textContent + "." ;
				   }			   
				
}



//operadores logicos
	  	  		  		  	
on.onclick = function(e){
          resetear();
}

suma.onclick = function(e){
	operandoa = pantalla.textContent;
	operacion = "+";
    limpiar();
	x1=0;
}

resta.onclick = function(e){
    operandoa = pantalla.textContent;
    operacion = "-";
    limpiar();
	x1=0;
}

multiplicacion.onclick = function(e){
	operandoa = pantalla.textContent;
    operacion = "*";
    limpiar();
	x1=0;
}

division.onclick = function(e){
    operandoa = pantalla.textContent;
    operacion = "/";
    limpiar();
	x1=0;

}

igual.onclick = function(e){
	operandob = pantalla.textContent;
    resolver();
	x1=0;
	x2=0;
}		  		  		  	
		  		  		  	
//calculo de operaciones 
							
 function resolver(){
    var res  = 0;
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
      //resetear();
	  var digito=res.toString();
	  pantalla.textContent = digito.substring(0,8);
	  
    }	

							
							
							
function limpiar(){
  pantalla.textContent = " ";
}

function resetear(){
  pantalla.textContent = "0";
  operandoa = 0;
  operandob = 0;
  operacion = "";
  x1=0;
}						


	
}		


}	
	
	