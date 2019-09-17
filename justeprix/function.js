var msg = ''
var total = 0
var min = 20
var max = 80
var aléa
function aléa(){
     alea= Math.ceil(Math.floor(Math.random()*(max - min + 1)+ min))
    return(alea)
}

function justeprix(){
    var x= parseInt(prompt('entrez un nombre'));
    aléa()
    while(x!==alea){
        console.log(alea)
        total++
    if(x>alea){
        alert("c'est moins")
        x= parseInt(prompt('entrez un nombre'));
        console.log(alea)
    }else if(x<alea){
        alert("c'est plus")
        x= parseInt(prompt('entrez un nombre'));
        console.log(alea)
    }
    }
    if(x===alea) {
        alert(`c'est juste tu as trouvé en ${total} coups`)
        console.log(alea)

}
console.log(x)
console.log(alea)
}