var alunos = [
    {
        nome:'Marcio',
        nota: 9,
        turma: 'A1',
    },
    {
        nome:'Pedro',
        nota: 5,
        turma: 'B1',
    },
    {
        nome:'Rafael',
        nota: 8,
        turma: 'B1',
    },
    {
        nome:'Tiago',
        nota: 2,
        turma: 'B1',
    },
    {
        nome:'Leticia',
        nota: 7,
        turma: 'A1',
    },
];    

const MEDIA = 7;

function calculoNotas(vetor , MEDIA){
    for (let index = 0; index < vetor.length; index++) {
        if(vetor[index].nota >= MEDIA){
            var passou = [];
            passou = vetor[index].nome;
            console.log(passou);
        }
    }
}

calculoNotas(alunos, MEDIA);