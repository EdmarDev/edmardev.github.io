/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function fatorial(n){
  if(n <= 0)
    return 1;
  else
    return n * fatorial(n-1);
}

fatorial(5);
/*
120
*/

function par(n){
  if(n%2 == 0)
    return true;
  else
    return false;
}

par(20)
/*
true
*/

function email_valido(e){
  if(e.indexOf("@") != 0 && e.indexOf("@") == e.lastIndexOf("@") && e.lastIndexOf(".") > e.indexOf("@") && e.lastIndexOf(".") != e.length -2 && e.indexOf(" ") == -1)
    return true;
  return false;
}

email_valido("nome@dom.aa")
/*
true
*/