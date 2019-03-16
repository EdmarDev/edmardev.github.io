var btns =  document.getElementsByClassName('botao_calc');

for (var i = 0; i < btns.length; i++){
	btns[i].addEventListener('click', function(e){document.getElementById('calc-output').textContent += e.target.value;}, false);
}

document.getElementById('button-C').addEventListener('click', function(e){document.getElementById('calc-output').textContent = '';}, false)
document.getElementById('button-=').addEventListener('click', function(e){
																			try{
																				document.getElementById('calc-output').textContent = eval(document.getElementById('calc-output').textContent);
																			}
																			catch(error){
																				alert('Erro');
																			}}, false)