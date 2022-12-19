let name  = prompt("Digite seu nome ")
let notaOne = prompt("Digite a nota da primeira prova")
let notaTwo = prompt("Digite a nota da segunda prova")

let result  = (Number(notaOne) + Number(notaTwo) / 2).toFixed(2)



function mediaNota(){
  if(result  > 7){
    alert(`A media do(a) ${name} é ${result}.
    Parabens ,${name }! voce foi aprovado no concurso!
    `)
  }else{
    alert(`A media do(a) ${name} é ${result}
    Nao foi dessa vez  ,${name }! Tente novamente !
    `)
  }
}

mediaNota()


