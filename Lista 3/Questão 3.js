var lista = [];
function adiciona(){
	var num = document.getElementById('valor');
	if (!isNaN(num.value) && num.value != "") {
		var resto;
		lista.push(num.value);
		num.value = "";
		resto = 10 - lista.length;
		if (resto>=1) {
			document.getElementById("p1").innerHTML = "Números restantes para adicionar a lista: " + resto;
		}else{
			document.getElementById("p1").innerHTML = "Números restantes para adicionar a lista: 0";
			var x = document.getElementById("botoes");
			x.style.display = "block";
		}
	}else{num.value = "";}
}
function cres(){
	lista.sort(function(a, b){return a-b});
	var x = document.getElementById("container");
	x.style.display = "flex";
	exibe();
}
function decres(){
	lista.sort(function(a, b){return b-a});
	var x = document.getElementById("container");
	x.style.display = "flex";
	exibe();
}
function exibe(){
	for(i = 0; i<lista.length; i++){
		var x = document.getElementById("v"+(i+1));
		x.innerHTML = lista[i];
	}
}