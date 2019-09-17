var selectElementsStartingWithA = function (array) {
    var startWithA = array.filter((arr) => arr.startsWith('a'))
    return startWithA;
}

var selectElementsStartingWithVowel = function (array) {
    var vowel = ['a', 'e', 'i', 'o', 'u', 'y'];
    /*var letter
    var array2=[]
    var startWithvowel=[]
    console.log(array)
    for (i = 0; i < array.length; i++) {
        letter = vowel[i];
        startWithvowel =(array.filter((arr) => arr.startsWith(letter)));
        console.log(startWithvowel)
    }*/
    var array2 = []
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < vowel.length; j++) {
            if (array[i].startsWith(vowel[j])) {
                array2.push(array[i])

            }
        }
    }
    return array2

}

var removeNullElements = function (array) {

    var remove = array.filter(function (val) {
        return val !== null;
    });
    return remove;
}

var removeNullAndFalseElements = function (array) {

    var remove = array.filter(function (val) {
        return val !== null && val !== false;
    });
    console.log(remove)
    return remove;

}

var reverseWordsInArray = function (array) {
    array2 = []
    for (i = 0; i < array.length; i++) {
        var result = array[i].split("").reverse().join("");
        array2.push(result);
    }
    return array2
}


var everyPossiblePair = function (array) {

    var array2 = [];
    array.sort();
    for (i = 0; i < array.length - 1; i++) {
        for (j = 1; j < array.length; j++) {
            if (array[i] != array[j]) {
                array2.push([array[i], array[j]]);
            }
        }
    }

    return array2;
}

var allElementsExceptFirstThree = function (array) {
    return array.slice(3);
}

var addElementToBeginning = function (array, element) {
    var arr = array.unshift(element);
    return array
}

var sortByLastLetter = function (array) {
    array2 = []
    array3 = []
    for (i = 0; i < array.length; i++) {
        var result = array[i].split("").reverse().join("");
        array2.push(result);
        array2.sort();
    }
    for (i = 0; i < array2.length; i++) {
        var result2 = array2[i].split("").reverse().join("");
        array3.push(result2)
    }
    return array3;
}

var getFirstHalf = function (string) {
    var strlength = Math.round((string.length / 2))
    str = string.substr(0, strlength)
    return str;
}

var makeNegative = function (number) {

    return -Math.abs(number);
}

var numberOfPalindromes = function (array) {

    var it = 0
    for (i = 0; i < array.length; i++) {
        var result = array[i].split("").reverse().join("");
        if (array[i] === result) {
            it++
        }
    }
    return it;
}

var shortestWord = function (array) {
    return array.filter(e => typeof e === 'string').sort((a, b) => a.length - b.length)[0];
}

var longestWord = function (array) {
    var longest = array.sort(function (a, b) { return b.length - a.length; })[0];
    return longest
}

var sumNumbers = function (array) {
    var total = 0
    for (i = 0; i < array.length; i++) {
        total += Number(array[i])
    }
    return total;
}

var repeatElements = function (array) {
    var array2 = []
    var array3 = []
    for (i = 0; i < array.length; i++) {
        var result = array[i]
        array2.push(result);
        array3.push(result);
    }
    for (i = 0; i < array3.length; i++) {
        var result = array3[i]
        array2.push(result)
    }
    return array2
}

var stringToNumber = function (string) {
    return Number(string);
}

var calculateAverage = function (array) {
    var total = 0
    for (i = 0; i < array.length; i++) {
        total += Number(array[i])
    }
    return total / i;
}


var getElementsUntilGreaterThanFive = function (array) {

    var array2 = []
    for (i = 0; i < array.length; i++) {
        if (array[i] < 6) {
            var result = array[i]
            array2.push(result);
        } else {
            return array2
        }
    }
    return array2;
}

var convertArrayToObject = function (array) {
    toObject = {}
    for (i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            var result = array[i]
            var result2 = array[++i]
            toObject[result] = result2
        }
    }
    return toObject;
}

var getAllLetters = function (array) {
    var str = array.toString()
    var result = str.split('')
    console.log(result)
    var remove = result.filter(function (val) {
        return val !== ',';
    });
    var res = remove.sort();
    
    return res
}

var swapKeysAndValues = function (object) {
    var result = {};
    for (var key in object) {
        result[object[key]] = key;
    }
    return result;
}



var sumKeysAndValues = function (object) {
    var array=[]
    var result= 0
    var id= Object.keys(object)
    var value= Object.values(object);
    for(i=0; i < id.length; i++){
        var test =  parseInt(id[i])
        array.push(test)
        
    }
    for(i=0; i < value.length; i++){
        array.push(value[i])
    }
    for(i=0; i < array.length; i++){
        result += array[i];
    }
    return result;
}

var removeCapitals = function (string) {
    return string.replace(/[A-Z]/g, '')
}

var roundUp = function (number) {
    return Math.ceil(number);
}

var formatDateNicely = function (date) {
    var dd = date.getDate(); 
    var mm = date.getMonth()+1;  
    var yyyy = date.getFullYear(); 
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    var date2 = dd+'/'+mm+'/'+yyyy;
    return date2;
}

var getDomainName = function (string) {
    var index1 = string.indexOf("@");
    var index2= string.indexOf(".com");
    var domName= string.slice((index1+1), index2)
    return domName;
}

var titleize = function (string) {
    var array = string.split(' ');
    var first = ''
    var result=''
    var result2=''
    var temp = array[0].charAt(0);

    result2=temp.toUpperCase()+array[0].slice(1)  
    console.log(result2)
    for(i=1; i < array.length; i++){
        if(array[i].length > 3){
            first= array[i].charAt(0);
            var test= first.toUpperCase()
            console.log(test)
            if(first != test ){
                console.log(first)
                console.log(test)
                 result= test + array[i].slice(1)
                console.log(result)
                result2+=' '+result 
            }
        }else{
            result2+=' '+ array[i]
        }
    }
    console.log(result2)
    return result2;
}

var checkForSpecialCharacters = function (string) {
   return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(string)
}

var squareRoot = function (number) {
    return Math.sqrt(number);
}

var factorial = function (number) {
    if (number === 0)
 {
    return 1;
 }
  return number * factorial(number-1);
}

var findAnagrams = function (string) {
    return 'Write your method here';
}

var convertToCelsius = function (number) {
    
    return Math.ceil((number-32)/(9/5));
}

var letterPosition = function (array) {
    var array2=[];
    var alphabet=['a','b','c','d', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
    var alphabetup= alphabet.map(function(x){ return x.toUpperCase() })
   for(i=0; i < array.length; i++){
       for(j=0; j < alphabetup.length; j++){
        if(array[i]=== alphabetup[j]){
            array2.push(j+1)
       }
    }
    for(k=0; k<alphabet.length; k++){
        if(array[i]=== alphabet[k]){
            array2.push(k+1)
        }
    
   }
}
    
    return array2;}
