let contador = 0
let res = document.querySelector("section#res")

function SomaClique(){
    contador++
    res.innerHTML = (`<p>O contador está em <mark>${contador}</mark> cliques.</p>`)
}

function ResetaClique(){
    contador = 0
    res.innerHTML = null
}