//1
// function ifLongOrShort(userInput) {
//     if (userInput.length >= 5) {
//         return "long"
//     }
//     return "short"
// }
// console.log(ifLongOrShort("nadav")); 

//2
// function getA(userInput) {
//     if (userInput.indexOf("a") > -1) {
//        return userInput.indexOf("a")
//     }
//     return "not found"
// }
// console.log(getA("nadav")); 

//3
// function getR(userInput) {
//     if (userInput.indexOf("r") > -1) {
//        return "true"
//     }
//     return "false"
// }
// console.log(getR("nadav")); 

//4
// function getStrindNChar(userInput, userletter) {
//     if (userInput.indexOf(userletter) > -1) {
//        return "true"
//     }
//     return "false"
// }
// getStrindNChar("nadav", "a")

//5
// function getStrindNChar(userInput, userletter) {
//     for (let i = 0; i < userInput.length; i++) {
//         if (userInput.lastIndexOf(userletter) > -1) {
//             console.log(userInput);
//             return 
//         }
//         alert("your letter is not in the string")
//     }
// }
// getStrindNChar("nadav", 'a')

//6
// let sayonara = "sayonara";
// function getThreeFirst(sayonara) {
//     return sayonara.substr(0,3);
// }
// console.log(getThreeFirst(sayonara)); 

//8
// let sayonara = "sayonara";
// function getLast(sayonara) {
//     return sayonara.substr(sayonara.indexOf("o"));
// }
// console.log(getLast(sayonara)); 

//9
// function isIndexLonger(userInput, indexNum) {
//     if (userInput.length < indexNum) {
//         return "index number too big";
//     }
//     return userInput.substring(indexNum); 
// }
// console.log(isIndexLonger("nadav zaro", 13)); 

//10
// function isIndexLonger(userInput, indexNum) {
//     if (userInput.length < indexNum) {
//         return "index number too big";
//     }
//     return userInput.substr(indexNum, 3); 
// }
// console.log(isIndexLonger("nadav zaro", 1)); 

//11
// function isIndexLonger(userInput, indexNum1, indexNum2) {
//     if (userInput.length < indexNum1) {
//         return "index number too big";
//     }
//     if (userInput.length < indexNum2) {
//         return "index number too big";
//     }
//     return userInput.substring(indexNum1, indexNum2); 
// }
// console.log(isIndexLonger("nadav zaro", 4, 10)); 

//12
// let sayonara = "sayonara";
// function getThreeFirst(userInput) {
//     return userInput.substring(0,3);
// }
// console.log(getThreeFirst(sayonara)); 

//13
// let sayonara = "sayonara";
// function getThreeFirst(userInput) {
//    return userInput.substr(userInput.indexOf("y"),4);
// }
// console.log(getThreeFirst(sayonara)); 

//14
// let sayonara = "sayonara";
// function getThreeFirst(userInput) {
//     return userInput.substr(userInput.indexOf("o"));
// }
// console.log(getThreeFirst(sayonara)); 

//15
// function getFullName(userInput) {
//     console.log(userInput.length);
//     if (userInput.indexOf(" ") > -1) {
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
//     console.log(userInput.substring(0,userInput.indexOf(" ")));
//     console.log(userInput.substring(userInput.indexOf(" ") +1));

// }
// getFullName("nadav zaro")

//16
// function getCompare(userInput1,userInput2) {
//    if (userInput1.toLowerCase() == userInput2.toLowerCase()) {
//        return "same";
//    } 
//    return "different";
// }
// console.log(getCompare("NADAV", "nadAv")); 

//17
// function getCompare(userInput1,userInput2) {
//     if (userInput1.toUpperCase() == userInput2.toUpperCase()) {
//         return "same";
//     } 
//     return "different";
//  }
// console.log(getCompare("NADAV", "nadAv")); 

//18
// function getLongerOne(firstName, lastName) {
//     if (firstName.length > lastName.length) {
//         console.log(firstName);
//     }
//     else{
//         console.log(lastName);
//     }
// }
// getLongerOne("nadav", "zasadro")

//19
// function isApiAndA(firstName, lastName) {
//     if (firstName.indexOf("a") > -1) {
//         console.log("exist");
//     }
//     else{
//         console.log("not exist");
//     }
//     if (lastName.indexOf("api") > -1) {
//         console.log("exist");
//     }
//     else{
//         console.log("not exist");
//     }
// }
// isApiAndA("ndv", "zasapio")

//20
// function ifLongOrShort(userInput) {
//     if (userInput.length >= 5) {
//         return "long";
//     }
//     return "short";
// }
// ifLongOrShort("nadav")

//21
// function ifLongerThenThree(userInput) {
//     if (userInput.length < 3) {
//         return "yes";
//     }
//     return "no";
// }
// console.log(ifLongerThenThree("na")); 

//22
// function getStringOrChart(userInput, userletter) {
//     if (userInput.length >= 6) {
//         return userInput;
//     }
//     return userInput.indexOf(userletter);
// }
// console.log(getStringOrChart("nadavfdg" , "a")); 

//23
// function getCharOfString(userInput, userletter) {
//     for (let i = 0; i < userInput.length; i++) {
//         if (userInput[i] == userletter) {
//             return userInput.indexOf(userletter);
//         }
//     }
//     return userInput;
// }

//24
// function getOfficalName(firstName,Lastname) {
//     return firstName[0]+ ". " +Lastname.toUpperCase();
// }
// console.log(getOfficalName("nadav" , "zaro"));

//25
// function getLongerLast(lastName1, lastName2) {
//     if(lastName1.length < lastName2.length){
//         console.log(lastName1.toLowerCase());
//         return lastName2;
//     }
//     console.log(lastName2.toLowerCase());
//     return lastName1;
// }
// console.log(getLongerLast("ZARO", "ZAUDA"));

//26
// function getNameOrElse(name, letter) {
//     for (let i = 0; i < name.length; i++) {
//         if (name[i] == letter) {
//             return name;
//         }
//     }
//     return "wrong letter entered"
// }
// console.log(getNameOrElse("nadav", "b"));

//27
function isOneName(userInput) {
    let nameArray = []
    if (userInput.indexOf(" ") == -1) {
        return userInput[0].toUpperCase()+ userInput.substring(1).toLowerCase();
    }
    if (userInput.indexOf(" ") == userInput.lastIndexOf(" ")) {
        nameArray.push(userInput.substring(0, userInput.indexOf(" ")) );
        nameArray.push(userInput.substring(userInput.indexOf(" ")))
        return nameArray
    }
    if (userInput.lastIndexOf(" ") != userInput.indexOf(" ")) {
        return "first name:" + userInput.substring(0, userInput.indexOf(" ")) + " middle name:" + userInput.substring(userInput.indexOf(" "),userInput.lastIndexOf(" ")) + " last name:" + userInput.substring(userInput.lastIndexOf(" "));
    }

}
console.log(isOneName("YAKOV")); 