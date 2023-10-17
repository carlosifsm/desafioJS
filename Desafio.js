const pessoas = [
    {name: "Aa", idade: 11},
    {name: "Ba", idade: 21},
    {name: "Bb", idade: 22},
    {name: "Ca", idade: 31},
    {name: "Cb", idade: 32},
    {name: "Cc", idade: 33},
    {name: "Da", idade: 41},
    {name: "Db", idade: 42},
    {name: "Dc", idade: 43},
    {name: "Dd", idade: 44}
]

const pesC = pessoas.filter(pessoas => pessoas.name.includes("C"));
console.log("Pessoas com C: " + pesC.map(pesC => pesC.name))

console.log("Média das idades: " + (pesC.map(pesC => pesC.idade).reduce((acc, idade) => acc+idade) / pesC.length).toFixed(1))