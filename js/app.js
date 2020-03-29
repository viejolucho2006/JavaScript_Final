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

//Asignar numeros al presionar un boton de la calculadora

	numeros: function(){
		document.getElementById("0").addEventListener("click", function() {calculadora.ingresoNumero("0");});
		document.getElementById("1").addEventListener("click", function() {calculadora.ingresoNumero("1");});
		document.getElementById("2").addEventListener("click", function() {calculadora.ingresoNumero("2");});
		document.getElementById("3").addEventListener("click", function() {calculadora.ingresoNumero("3");});
		document.getElementById("4").addEventListener("click", function() {calculadora.ingresoNumero("4");});
		document.getElementById("5").addEventListener("click", function() {calculadora.ingresoNumero("5");});
		document.getElementById("6").addEventListener("click", function() {calculadora.ingresoNumero("6");});
		document.getElementById("7").addEventListener("click", function() {calculadora.ingresoNumero("7");});
		document.getElementById("8").addEventListener("click", function() {calculadora.ingresoNumero("8");});
		document.getElementById("9").addEventListener("click", function() {calculadora.ingresoNumero("9");});
		document.getElementById("on").addEventListener("click", function() {calculadora.on_c();});
		document.getElementById("sign").addEventListener("click", function() {calculadora.controlSigno();});
		document.getElementById("punto").addEventListener("click", function() {calculadora.controlComa();});
		document.getElementById("dividido").addEventListener("click", function() {calculadora.operadores("/");});
		document.getElementById("por").addEventListener("click", function() {calculadora.operadores("*");});
		document.getElementById("menos").addEventListener("click", function() {calculadora.operadores("-");});
		document.getElementById("mas").addEventListener("click", function() {calculadora.operadores("+");});
		document.getElementById("igual").addEventListener("click", function() {calculadora.teclaIgual();});
	},

	ingresoNumero: function(valor){
		if (this.valorPantalla.length < 8) {
		
			if (this.valorPantalla=="0") {
				this.valorPantalla = "";
				this.valorPantalla = this.valorPantalla + valor;
			} else {
				this.valorPantalla = this.valorPantalla + valor;
			}
		this.cargarValores();
		}
	},

	on_c: function(){ 
			this.valorPantalla = "0";
			this.operacion = "";
			this.operandoA = 0;
			this.operandoB = 0;
			this.resultado = 0;
			this.Operación = "";
			this.masIgual = false;
			this.operandoC = 0;
			this.cargarValores();
		},

	controlSigno: function(){
		if (this.valorPantalla !="0") {
			var var1;
			if (this.valorPantalla.charAt(0)=="-") {
				var1 = this.valorPantalla.slice(1);
			}	else {
				var1 = "-" + this.valorPantalla;
			}
		this.valorPantalla = "";
		this.valorPantalla = var1;
		this.cargarValores();
		}
	},

	controlComa: function(){
		if (this.valorPantalla.indexOf(".")== -1) {
			if (this.valorPantalla == ""){
				this.valorPantalla = this.valorPantalla + "0.";
			} else {
				this.valorPantalla = this.valorPantalla + ".";
			}
			this.cargarValores();
		}
	},
	
//inicio de funciones para realizar operaciones 
	operadores: function(calcular){
		this.operandoA = parseFloat(this.valorPantalla);
		this.valorPantalla = "";
		this.operacion = calcular;
		this.masIgual = false;
		this.cargarValores();
	},

	// Control del boton igual, se controla la secuencia de operaciones al presionarlo
	teclaIgual: function(){ 

		if(!this.masIgual){ 
			this.operandoB = parseFloat(this.valorPantalla);
			this.operandoC = this.operandoB;
			this.realizarOperacion(this.operandoA, this.operandoB, this.operacion);
		} else { 
			this.realizarOperacion(this.operandoA, this.operandoC, this.operacion);
		}
	
		this.operandoA = this.resultado;
		this.valorPantalla = "";
	
		if (this.resultado.toString().length < 9){
			this.valorPantalla = this.resultado.toString();
		} else {
			this.valorPantalla = this.resultado.toString().slice(0,8)
		}
	
		this.masIgual = true;		
		this.cargarValores();
	},
	
	realizarOperacion: function(operandoA, operandoB, operacion){
		switch(operacion){
			case "+": 
				this.resultado = eval(operandoA + operandoB);
			break;
			case "-": 
				this.resultado = eval(operandoA - operandoB);
			break;
			case "*": 
				this.resultado = eval(operandoA * operandoB);
			break;
			case "/": 
				this.resultado = eval(operandoA / operandoB);
		}
	},

//fin de funciones para realizar operaciones 
	
	
	cargarValores: function(){
		this.pantalla.innerHTML = this.valorPantalla;
	}

}	
	
calculadora.init();	