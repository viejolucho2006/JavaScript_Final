//Declaramos variables
var operandoa;
var operandob;
var operacion;
var uno   = document.getElementById('1');
var dos   = document.getElementById('2');
var tres   = document.getElementById('3');
var cuatro   = document.getElementById('4');
var cinco   = document.getElementById('5');
var seis   = document.getElementById('6');
var siete   = document.getElementById('7');
var ocho   = document.getElementById('8');
var nueve   = document.getElementById('9');
var cero   = document.getElementById('0');


uno.addEventListener('mousedown', function() {
		document.getElementById('1').style="width:76px;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('1').style="width:77px;height: 63px;";
		});
	});
	  
dos.addEventListener('mousedown', function() {
		document.getElementById('2').style="width:76px;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('2').style="width:77px;height: 63px;";
		});
	});
	
tres.addEventListener('mousedown', function() {
		document.getElementById('3').style="width:76px;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('3').style="width:77px;height: 63px;";
		});
	});	

cuatro.addEventListener('mousedown', function() {
		document.getElementById('4').style="width:76px;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('4').style="width:77px;height: 63px;";
		});
	});
	  
cinco.addEventListener('mousedown', function() {
		document.getElementById('5').style="width:76px;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('5').style="width:77px;height: 63px;";
		});
	});
	
seis.addEventListener('mousedown', function() {
		document.getElementById('6').style="width:76px;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('6').style="width:77px;height: 63px;";
		});
	});	

siete.addEventListener('mousedown', function() {
		document.getElementById('7').style="width:76px;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('7').style="width:77px;height: 63px;";
		});
	});
	  
ocho.addEventListener('mousedown', function() {
		document.getElementById('8').style="width:76px;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('8').style="width:77px;height: 63px;";
		});
	});
	
nueve.addEventListener('mousedown', function() {
		document.getElementById('9').style="width:76px;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('9').style="width:77px;height: 63px;";
		});
	});	
cero.addEventListener('mousedown', function() {
		document.getElementById('0').style="width:76px;height: 62px;";
		addEventListener('mouseup', function() {
		document.getElementById('0').style="width:77px;height: 63px;";
		});
	});	

	
	
//cargar los numeros para la operacion	
	
uno.onclick = function(e){
          display.textContent = display.textContent  + "1";
      }
	  	
	
	
	
	
	
	
	
	
	
	
	
	
/*
function mayor(){
	var uno    = document.getElementById('1').style="width:78px;height: 64px;";
	var dos    = document.getElementById('2').style="width:78px;height: 64px;";
	var tres   = document.getElementById('3').style="width:78px;height: 64px;";
	var cuatro = document.getElementById('4').style="width:78px;height: 64px;";
	var cinco  = document.getElementById('5').style="width:78px;height: 64px;";
	var seis   = document.getElementById('6').style="width:78px;height: 64px;";
	var siete  = document.getElementById('7').style="width:78px;height: 64px;";
	var ocho   = document.getElementById('8').style="width:78px;height: 64px;";
	var nueve  = document.getElementById('9').style="width:78px;height: 64px;";
	var cero   = document.getElementById('0').style="width:78px;height: 64px;"
	
	}

	function menor(){
	var uno    = document.getElementById('1').style="width:77px;height: 63px;";
	var dos    = document.getElementById('2').style="width:77px;height: 63px;";
	var tres   = document.getElementById('3').style="width:77px;height: 63px;";
	var cuatro = document.getElementById('4').style="width:77px;height: 63px;";
	var cinco  = document.getElementById('5').style="width:77px;height: 63px;";
	var seis   = document.getElementById('6').style="width:77px;height: 63px;";
	var siete  = document.getElementById('7').style="width:77px;height: 63px;";
	var ocho   = document.getElementById('8').style="width:77px;height: 63px;";
	var nueve  = document.getElementById('9').style="width:77px;height: 63px;";
	var cero   = document.getElementById('0').style="width:77px;height: 63px;"
	}



document.getElementById('1').onmousedown=mayor;
document.getElementById('1').onmouseup=menor;
document.getElementById('2').onmousedown=mayor;
document.getElementById('2').onmouseup=menor;
document.getElementById('3').onmousedown=mayor;
document.getElementById('3').onmouseup=menor;
document.getElementById('4').onmousedown=mayor;
document.getElementById('4').onmouseup=menor;

*/