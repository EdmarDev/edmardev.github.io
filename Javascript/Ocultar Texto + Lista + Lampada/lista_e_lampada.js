var lampada_acesa = false;
function add_list_child(e) {
  e.preventDefault();
  var text = document.getElementById('text_input').value;
  if(text.trim() == "") return;
  var li = document.createElement("LI");
  li.appendChild(document.createTextNode(text));
  document.getElementById('lista').appendChild(li);
  document.getElementById('text_input').value = " ";
}

function mudar_lampada()
{
  lampada = document.getElementById('lampada');
  if(lampada_acesa){
    lampada.src = "lampada_off.gif";
    lampada_acesa = false
  }
  else {
    lampada.src = "lampada_on.gif";
    lampada_acesa = true;
  }
}

document.getElementById('add_button').addEventListener("click", add_list_child);
document.getElementsByTagName('form')[0].addEventListener("submit", add_list_child);
document.getElementById('lampada').addEventListener("click", mudar_lampada);
