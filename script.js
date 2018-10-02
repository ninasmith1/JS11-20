function firstLast6(array){
    var first = array[0];
    var last = array[array.length - 1];
    if(first == 6 || last == 6){
        return true;
    }else{
        return false;
    }
}

function has23(array){
    var has2 = array.includes(2);
    var has3 = array.includes(3);
    if(has2 == true || has3 == true){
        return true;
    }else{
        return false;
    }
}

function fix23(array){
    for(var i = 0; i < 3; i++){
        if(array[i]==2 && array[i+1]==3){
            array[i+1]=0;
        }
    }
    return array;
}

function countYZ(string){
    var stringCaps = string.toLocaleUpperCase();
    var count = 0;
    for(var i = 0; i < string.length; i++){
        if(stringCaps[i]=="Y" || stringCaps[i]=="Z"){
            if(stringCaps[i+1]==" "){
                count++
            }
        }
    }
    if(stringCaps.endsWith("Y") || stringCaps.endsWith("Z")){
        count++
    }
    return count;
}

function endOther(string1, string2){
    var string1Caps = string1.toLocaleUpperCase();
    var string2Caps = string2. toLocaleUpperCase();

    var endswith2 = string1Caps.endsWith(string2Caps);
    var endswith1 = string2Caps.endsWith(string1Caps);

    if(endswith2 == true|| endswith1 == true){
        return true;
    }else{
        return false;
    }
}

function starOut(string){
    var newString = "";
    for(var i = 0; i < string.length; i++) {
        if (string[i] != "*" && string[i - 1] != "*" && string[i + 1] != "*") {
            newString += string[i];
        }
    }
    return newString;
}

function getSandwich(string){
    var bread1 = string.indexOf("bread");
    var bread2 = string.lastIndexOf("bread");

    if(string.includes("bread")==false){
        return "";
    }

    var newString = string.slice(bread1 + 5, bread2);
    return newString;
}

function canBalance(array){
    var leftside = 0;
    var rightside = 0;
    for(var n = 0; n < array.length; n++){
        rightside += array[n];
    }
    var result = false;
    for(var i = 0; i < array.length; i++){
        leftside += array[i];
        rightside -= array[i];
        if(leftside == rightside){
            result = true;
        }
    }
    return result;
}

function countClumps(array){
    var count = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i]==array[i+1] && array[i] != array[i-1]){
            count += 1;
        }
    }
    return count;
}

function evenlySpaced(a, b, c){
    var result = false;
    if(a>b && b>c){
        if(a - b == b - c){
            result = true;
        }
    }else if(a>c && c>b){
        if(a - c == c - b){
            result = true;
        }
    }else if(b>c && c>a){
        if(b - c == c - a){
            result = true;
        }
    }else if(b>a && a>c) {
        if (b - a == a - c) {
            result = true;
        }
    }else if(c>a && a>b) {
        if (c - a == a - b) {
            result = true;
        }
    }else if(c>b && b>a) {
        if (c - b == b - a) {
            result = true;
        }
    }else{
        if(a==b && c==b){
            result = true;
        }
    }
    return result;
}

