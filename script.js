const textos = ['Web Developer','Backend Developer'];
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
function testes(){
    const x = textos.length
    i=0
    while(i<=x-1){
        b=textos[i]
        y=b.length
        c=0
        while(c<=y-1){
            const frase = b.split('')
            
            console.log(frase)          
                
           
            
            c++
        }
        /*console.log(textos[i].split(''))*/
       i++ 
    }
    
}

