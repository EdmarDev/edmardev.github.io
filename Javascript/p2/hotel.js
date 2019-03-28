var inputs = document.getElementsByTagName('input');

function email_valido(e){
  if(e.indexOf("@") != 0 && e.indexOf("@") == e.lastIndexOf("@") && e.lastIndexOf(".") > e.indexOf("@") && e.lastIndexOf(".") != e.length -2 && e.indexOf(" ") == -1)
    return true;
  return false;
}

function exibir_hospedes(){
	toShow = document.getElementsByName('qtd_quartos')[0].value;
	if(toShow > 4 || toShow < 1)
		toShow = 0;
	items = document.getElementById('hospedes').getElementsByTagName('li');
	for(i = 0; i < items.length; i++)
	{
		if(i < toShow)
			items[i].style.display = "block";
		else
			items[i].style.display = "none";
	}
}

function validar_entrada(e) {
	for(i = 0; i < inputs.length; i++)
	{
		if(inputs[i].value.trim() == "")
		{
			if(e && e instanceof Event && e.type == "submit"){
				e.preventDefault();
				alert("Preencha todos os campos!");
			}
			return;
		}
	}

	if(!email_valido(document.getElementsByName('email')[0].value))
	{
		if(e && e instanceof Event && e.type == "submit"){
			e.preventDefault();
			alert("Insira um e-mail válido.");
		}
		return;
	}

	if(document.getElementsByName('email')[0].value != document.getElementsByName('c_email')[0].value)
	{
		if(e && e instanceof Event && e.type == "submit"){
			e.preventDefault();
			alert("Confirmação de e-mail falhou");
		}
		return;
	}

	data_e = new Date(document.getElementsByName('data_e')[0].value);
	data_s = new Date(document.getElementsByName('data_s')[0].value);
	date_diff = Math.ceil((data_s - data_e)/(1000 * 3600 * 24));
	if(date_diff <= 0)
	{
		if(e && e instanceof Event && e.type == "submit"){
			e.preventDefault();
			alert("Insira datas válidas");
		}
		return;
	}

	hospedes = document.getElementsByName('hospedes');
	quartos = parseInt(document.getElementsByName('qtd_quartos')[0].value);
	hospedes_adicionais = 0;
	for(i = 0; i < hospedes.length; i++)
	{
		hospedes_adicionais += parseInt(hospedes[i].options[hospedes[i].selectedIndex].value) - 1;
	}

	diaria = quartos * 149 + hospedes_adicionais * 60;
	document.getElementById('valor_d').textContent = diaria;
	document.getElementById('valor_t').textContent = diaria * date_diff;

}

for(i = 0; i < inputs.length; i++)
{
	inputs[i].addEventListener("blur", validar_entrada);
}
document.getElementById('form').addEventListener("submit", validar_entrada);
document.getElementsByName('qtd_quartos')[0].addEventListener("change", exibir_hospedes);
for(i = 0; i < document.getElementsByName('hospedes').length; i++)
{
	document.getElementsByName('hospedes')[i].addEventListener("change", validar_entrada);
}