function doisnumeros(){
    let n1 = Number(prompt("Digite um número:"));
    let n2 = Number(prompt("Digite outro número:"));
    let igualdade;
    let maioroumenor10;
    let maioroumenor20;
    let soma = n1+n2;


    n1 == n2?igualdade ="Números iguais":igualdade="Números Diferentes";

    n1+n2>=10?maioroumenor10 = "maior":maioroumenor10 = "menor";

    n1+n2>=20?maioroumenor20 = "maior":maioroumenor20 = "menor";

    alert(`Os números ${n1} e ${n2} são ${igualdade},sua soma é ${soma},que é ${maioroumenor10} que 10 e ${maioroumenor20} que 20`);
}

doisnumeros();