function ativarLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = "";
    arrTexto.array.forEach((letra,i) => {
        setTimeout(()=>{
            elemento.innerHTML +=letra;
        })
        
    });
}
const titulo = document.querySelector('.digitando');