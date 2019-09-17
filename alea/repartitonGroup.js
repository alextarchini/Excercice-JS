var list = []
let test = list.indexOf(30)
console.log(test)

group0 = []
group1 = []
group2 = []
group3 = []
group4 = []
total= []
count = 0
function alea() {
    var alea = Math.floor((Math.random())*24) + 1
    return alea
}
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function assign() {
    let people=parseInt(prompt('Entrez le nombre de participant'))
    let name = prompt("Entrez un nom")
    list.push(name)
    while(list.length !== people){
        let name= prompt("Entrez un nom")
        list.push(name)
        
    }
console.log(list, 'entrée')
shuffle(list)
console.log(list, 'shuffle')
var nbrgrp=parseInt(prompt("entrez le nombre de groupe"))
var group= Math.floor(list.length/nbrgrp)
for(i=0; i <= nbrgrp; i++){
let tab=list.slice(count,group)
list.splice(count, group)
console.log(tab, "tableau group")
}
}
//     while (list.length !== 0) {
        
//         var nbr = alea()
//         console.log(nbr, 'first')
        
//             if(total.indexOf(nbr) < 0){
       
//                 console.log(total.indexOf(nbr,), 'index')
//                 nbr = alea()
//                 console.log(nbr, 'second')
                
//             }
        
//         total.push(nbr)
//         console.log(total.sort(), 'temp')
//         var index = list.indexOf(nbr)
        
        
//         if (group0.length < 5) {
//             group0.push(nbr)

//         } else if (group1.length < 5) {
//             group1.push(nbr)
//         } else if (group2.length <5) {
//             group2.push(nbr)
//         } else if (group3.length < 5) {
//             group3.push(nbr)
//         } else if (group4.length < 5) {
//             group4.push(nbr)
//         };
//         list.splice(index, 1)
        
       
//     }
//     console.log(group0, 'result1')
//         console.log(group1, 'result2')
//         console.log(group2, 'result3')
//         console.log(group3, 'result4')
//         console.log(group4, 'result5')

// }



