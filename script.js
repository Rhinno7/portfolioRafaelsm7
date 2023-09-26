const digitar = document.querySelector(".escrevendo");
const cursor = document.querySelector(".cursor");
const textos = ["developer back-end","developer Web front-end"]

const digitandoAtraso = 50, apagandoAtraso = 80, novoAtrasoTexto = 1500;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textos[textArrayIndex].length) {
      if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
      digitar.textContent += textos[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, digitandoAtraso);
    } 
    else {
      cursor.classList.remove("typing");
      setTimeout(erase, novoAtrasoTexto);
    }
  }
  function erase() {
    if (charIndex > 0) {
      if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
      digitar.textContent = textos[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, apagandoAtraso);
    } 
    else {
      cursor.classList.remove("typing");
      textArrayIndex++;
      if(textArrayIndex>=textos.length) textArrayIndex=0;
      setTimeout(type, digitandoAtraso + 1100);
    }
  }
  document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textos.length) setTimeout(type, novoAtrasoTexto + 250);
  });


/*function ativarLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = "";
    arrTexto.forEach((letra,i) => {
        setTimeout(()=>{
            elemento.innerHTML +=letra;
        },75*i);
    });
}

const titulo = document.querySelector('.digitando');
ativarLetra(titulo);

/*FUNÇÃO PARA TESTES 19.09.2023*/
// TESTE PARA O EFEITO DE DGITAÇÃO 25.09.2023

/*  function testes(elemento){
    //elemento.innerHTML="";
    const txt = textos.split('');
    const txtDois = textosDois.split('');
    txt.forEach((letra,i)=>{
        setTimeout(()=>{
            elemento.innerHTML+=letra;
        },75*i);

    })
    const xxx = elemento.innerHTML;
    const xxy = xxx.split('')
    xxy.forEach((letrass,ii)=>{
        setTimeout(()=>{
            const g = xxy.pop()
            elemento.innerHTML+=letrass;
        },75*ii);
    })

    */
    //elemento.innerHTML=xxx
    /*const complet = elemento.innerHTML
    const numTextos = textos.length
    const contador = 0
    const xx = [complet]
    while(contador==numTextos){
        
        setTimeout(()=>{
            const gg = xx.pop()
        })
       
        gg = ff
        contador++

    }*/
    


    
     



    


