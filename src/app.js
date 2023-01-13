/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload =  () => {
  //write your code here
document.querySelector('#domain').innerHTML=generateDomain();
// 1. generar todas las combinaciones posibles
// 2. Mostrar en el HTML las combinaciones.

};


let generateDomain = () =>{
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let exts = ['.es','.com','.us','.io']


  let mostarHTML = '<ul>';
  

for( let i = 0 ; i < pronoun.length; i++){
  for (let j = 0 ; j < adj.length; j++){
    for (let k = 0 ; k < noun.length ; k++){
      for (let m = 0 ; m < exts.length; m++){
        const item = pronoun[i];
        const item1 = adj[j];
        const item2 = noun[k];
        const item3 = exts[m];
        let domainName = item+item1+item2+item3;
        mostarHTML += '<li>'+domainName+'</li>';

      }
    }
  }
}
return mostarHTML
}

