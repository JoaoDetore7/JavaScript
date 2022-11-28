function calcMedia(){
    let nome = window.prompt('Qual o nome do aluno')
    let nota1 = Number(window.prompt(`Qual a primeira nota de ${nome}`))
    let nota2 = Number(window.prompt(`Qual a segunda nota de ${nome}`))
    let res = document.querySelector('section#res')
    let media = (nota1+nota2)/2
    let msg

    res.innerHTML = (`<p>Calculando a média de <mark>${nome}</mark></p>`)
    res.innerHTML += (`<p>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark></p>`)    

    if(media >= 6){
        msg = 'Meus parabéns!'  
    }else{
        msg = 'Estude um pouco mais!'
    }
    
        res.innerHTML += (`<p>A média final será <mark>${media}</p>`)   
        res.innerHTML += (`<p>A mensagem que temos é:  <strong style='color:red;'>${msg}</strong></p></p>`) 
    
}