let string = 'Inverter String' //Insira a frase para ser invertida.
function iniciar(){
    let separar = separarCaracteres(string);
    if(separar) {
        let inverso = inverterCaracteres(separar);
        let juntar = juntarCaracteres(inverso); 
        console.log(`A string (${string}) ficou ${juntar}`) 
    };     
};
function separarCaracteres(frase) {
    if(frase.length >= 3) { //Condição de 3 letras ou mais para rodar o programa.
        console.log(`A string a ser invertida é: ${frase}`)
        let newfrase = frase.split(''); //Separar as palavras em letras
        return newfrase;
    } else {
        console.log(`[ERRO]. Adicione uma frase acima com 3 caracteres ou mais!`);
    };   
};
function inverterCaracteres(separar) {
    let indiceMax = separar.length;
    let fraseInvertida = [];    
    for(let c = 0; c < indiceMax; c++){
        fraseInvertida.push(separar.pop()); 
    }
    return fraseInvertida
};
function juntarCaracteres(caracteres) {
    let juntar = caracteres.join('')
    return juntar
};
iniciar();