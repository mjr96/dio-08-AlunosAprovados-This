
function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos} anos de idade.`;
}

const pessoa = 
    {
        nome: 'Marcio',
        idade: 25,
    }




console.log(calculaIdade.apply(pessoa, [20]));