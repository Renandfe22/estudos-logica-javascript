let velCarro = 65
let velPermitida = 60
let pontosCarteira = 7
if(velCarro <= velPermitida)
{ 

    console.log("o motorista está dentro do limite de velocidade")

} else
{
    let pontos = 3
    console.log("o motorista foi multado por excesso de velocidade")
    console.log(`o valor da multa é de 688R$ e o motorista recebeu ${pontos} pontos`)
    pontosCarteira = pontosCarteira + pontos
    console.log(`o motorista agora tem ${pontosCarteira} pontos na carteira`)

} if(velCarro > velPermitida && pontosCarteira >= 10){
    console.log("o motorista perdeu a carteira")
}

