 
//criando uma função que retorna uma soma 
 function soma(numA,numB){
    let somatorio = numA +numB
    return(somatorio);
 }
//armazenando o retorno dentro de uma variavel
 let resultado = soma(15,5);

 console.log(`o resultado é ${resultado}`)
 //chamando a funcao fora da variavel 
 console.log(`o resultado é ${soma(55,88)}`)

//uma funçao so pode retornar uma expressao ou um objeto