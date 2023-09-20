const textos = ' Backend Developer';
const textosDois = ' Web Developer';
function ativarLetra(elemento){
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
function testes(elemento){
    elemento.innerHTML="";
    const txt = textos.split('');
    const txtDois = textosDois.split('');
    txt.forEach((letra,i)=>{
        setTimeout(()=>{
            elemento.innerHTML+=letra;
        },75*i);
    })


    
     
}
const tt = document.querySelector('.testsT');
testes(tt);
    


