var ltr = []
var unique = ''
var word = ''
function pendu() {
    word = prompt("Entrez un mot").split()

    
    while (ltr.length != word.length) {
        unique = prompt('Joueur 2 entrez une seul Lettre');
        for(i=0; i < word.length; i++){
            for(j=0; j < ltr.length; j++){
                if (word.includes(unique)) {
                    ltr.push(unique)
                }
            }
        
    }
    word.split('').sort()
    ltr.sort()
    
    }



}

