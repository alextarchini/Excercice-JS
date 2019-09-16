var Character={
    name : 'Zelda',
    age : 250,
    items_to_give:['une potion de soin', 'une potion de mana', 'un elixir de vie', '50 g', 'une poupée a l\'éfigie de Zelda' ],
}
var shop=[
    {title: 'Epée', physic: 4, magic: 0, minLevel: 5, avaiable: true},
    {title: 'Hallebarde', physic: 6, magic: 0, minLevel: 10, avaiable: true},
    {title: 'Baton de la nuit', physic: 2, magic: 4, minLevel: 5, avaiable: false},
    {title: 'arc long', physic: 3, magic: 0, minLevel: 4, avaiable: true},
    {title: 'arc court', physic: 2, magic: 0, minLevel: 2, avaiable: false},
    {title: 'dague de flamme', physic: 4, magic: 3, minLevel: 9, avaiable: true},
    {title: 'baguette de sorcier', physic: 4, magic: 4, minLevel: 5, avaiable: true},
    {title: 'arc de Glace', physic: 5, magic: 7, minLevel: 13, avaiable: false},
    {title: 'baton du roi de la nuit', physic: 5, magic: 8, minLevel: 15, avaiable: true},

]
var mainCharacter = {
    name: 'Deku',
    level: 3,
    life : 150,
    weapon : {name: ' épée courte ', dammage: 4},
    attack(){}
}
console.log(mainCharacter)

for(id in Character){
    console.log(Character[id])
}
function giveitem(){
var nbr= Character.items_to_give.length
var alea= Math.floor(Math.random()*nbr);
document.getElementById('message').innerHTML= Character.name + ' vous donne ' + Character.items_to_give[alea]
}
var str= '' 
var str2= ''
var str3= ''
function showShop(){
    for(i=0; i < shop.length; i++) {
        str += JSON.stringify(shop[i]) + '<br>'
        console.log(str)
    }
    document.getElementById('shop'). innerHTML= str
}
function dispo(){
    for(i=0; i < shop.length; i++) {
        if(shop[i].avaiable === true){
            str2 += JSON.stringify(shop[i])+ '<br>'
        }
    }
    document.getElementById('dispo').innerHTML= str2
}
function level(){
    for(i=0; i < shop.length; i++) {
        if(shop[i].minLevel >= 10){
            str3 += JSON.stringify(shop[i])+ '<br>'
        }
    }
    document.getElementById('dispo').innerHTML= str3
}

function attack(){
    document.getElementById('attack').innerHTML= mainCharacter.name + " attaque avec l'arme" + " " + mainCharacter.weapon.name + 'les dégat sont de ' + (mainCharacter.weapon.dammage*mainCharacter.level)
}