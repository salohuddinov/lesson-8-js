// String1.

// function getFirstNUpperCaseLetters(n) {
//     let result = '';
//     let startCode = 'A'.charCodeAt(0);

//     for (let i = 0; i < n; i++) {
//         let currentLetter = String.fromCharCode(startCode + i);
//         result += currentLetter;
//     }

//     return result;
// }

// var n = 5;
// var result = getFirstNUpperCaseLetters(n);
// console.log(result);


// String2.

// function identifyCharacterType(char) {
//     if (char >= '0' && char <= '9') {
//         return 'digit';
//     } else if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
//         return 'lotin';
//     } else {
//         return 'nol';
//     }
// }

// var character = '5'; 
// var result = identifyCharacterType(character);
// console.log(result);


// String3.

// function getUTF16Codes(str) {
//     if (str.length === 0) {
//         return 'Satr bo\'sh!';
//     }

//     let firstChar = str.charCodeAt(0);
//     let lastChar = str.charCodeAt(str.length - 1);

//     return {
//         firstCharacter: firstChar,
//         lastCharacter: lastChar
//     };
// }

// let inputString = 'Hello';
// let result = getUTF16Codes(inputString);
// console.log(result);


// String4.

// function generateString(n, char) {
//     if (n <= 0) {
//         return 'N soni musbat butun son bo\'lishi kerak!';
//     }

//     let resultString = char.repeat(n);
//     return resultString;
// }

// let N = 5; 
// let belgi = 'A'; 
// let result = generateString(N, belgi);
// console.log(result);


// String5.

// function reverseString(inputString) {
//     let reversedString = inputString.split('').reverse().join('');
//     return reversedString;
// }

// var inputStr = 'Hello, World!'; 
// console.log(result);


// String6.



// String7.

// function findDigitSum(inputString) {
//     let digitSum = 0;
//     for (let char of inputString) {
//         if (!isNaN(char)) {
//             digitSum += parseInt(char);
//         }
//     }
//     return digitSum;
// }

// let inputStr = 'Hello1234';
// var result = findDigitSum(inputStr);
// console.log(result);


// String8.

// function countLowercaseLetters(inputString) {
//     let lowercaseCount = 0;
//     for (let char of inputString) {
//         if ((char >= 'a' && char <= 'z') || (char >= 'а' && char <= 'я')) {
//             lowercaseCount++;
//         }
//     }
//     return lowercaseCount;
// }

// var inputStr = 'Hello'; let
// var result = countLowercaseLetters(inputStr);
// console.log(result);


// String9.


// String10.

// function swapCase(inputString) {
//     let resultString = '';
//     for (let char of inputString) {
//         if (char >= 'A' && char <= 'Z') {
//             resultString += String.fromCharCode(char.charCodeAt(0) + 32); 
//         } else if (char >= 'a' && char <= 'z') {
//             resultString += String.fromCharCode(char.charCodeAt(0) - 32);
//         } else {
//             resultString += char;
//         }
//     }
//     return resultString;
// }

// let inputStr = 'Hello'; 
// let result = swapCase(inputStr);
// console.log(result);


// String11.

// function checkStringType(inputString) {
//     if (!isNaN(inputString)) {
//         if (inputString.indexOf('.') !== -1) {
//             return 2;
//         } else {
//             return 1;
//         }
//     } else {
//         return 0;
//     }
// }

// console.log(checkStringType("123"));  
// console.log(checkStringType("3.14")); 
// console.log(checkStringType("Hello"));


// String12.

// function getInverseNumber(n) {
//     const strN = n.toString();

//     const inverseStr = strN.split('').reverse().join('');
//     const inverseNumber = parseInt(inverseStr);

//     return inverseNumber;
// }

// console.log(getInverseNumber(12345));
// console.log(getInverseNumber(789));


// String13.



// String14.

// function getNewString(N1, N2, S1, S2) {
//     if (N1 >= 0 && N2 >= 0 && N1 <= S1.length && N2 <= S2.length) {
//         const newString = S1.substring(0, N1) + S2.substring(S2.length - N2);
//         return newString;
//     } else {
//         return "Invalid input: Check the values of N1, N2, S1, and S2.";
//     }
// }

// const result = getNewString(3, 2, "Hello, ", "World!");
// console.log(result); 


// String15.

// function doubleChar(C, S) {
//     let result = "";

//     for (let i = 0; i < S.length; i++) {
//         if (S[i] === C) {
//             result += C + C;
//         } else {
//             result += S[i];
//         }
//     }

//     return result;
// }

// const resultString = doubleChar('a', 'abcde');
// console.log(resultString);


// String16.

// function insertStringBeforeChar(C, S1, S2) {
//     let result = "";
//     let index = S1.indexOf(C);

//     if (index !== -1) {
//         result = S1.slice(0, index) + S2 + S1.slice(index);
//     } else {
//         result = S1;
//     }

//     return result;
// }

// const resultString = insertStringBeforeChar('a', 'bcd', '123');
// console.log(resultString); 


// String17.

// function countOccurrences(S1, S2) {
//     let count = 0;
//     let index = S1.indexOf(S2);

//     while (index !== -1) {
//         count++;
//         index = S1.indexOf(S2, index + 1);
//     }

//     return count;
// }

// const resultCount = countOccurrences('abababab', 'ab');
// console.log(resultCount);


// String18.

// function removeFirstOccurrence(S1, S2) {
//     const index = S1.indexOf(S2);

//     if (index !== -1) {
//         const result = S1.slice(0, index) + S1.slice(index + S2.length);
//         return result;
//     }

//     return S1;
// }

// const resultString = removeFirstOccurrence('abcdefabc', 'abc');
// console.log(resultString);


// String19.


// String20.

// function replaceFirstOccurrence(S1, S2, S3) {
//     const index = S1.indexOf(S2);

//     if (index !== -1) {
//         const result = S1.substring(0, index) + S3 + S1.substring(index + S2.length);
//         return result;
//     } else {
//         return S1;
//     }
// }

// const resultString = replaceFirstOccurrence('abcdefabc', 'abc', '123');
// console.log(resultString);


// String21.

// let S1 = "Bu birinchi satr";
// let S2 = "ikkinchi satr";
// let S3 = "uchinchi satr";

// S1 = S1 + S2;

// S3 = S1;

// console.log("S1: ", S1);
// console.log("S2: ", S2);
// console.log("S3: ", S3);


// String22.

// function aniqlovchiSozlar(satr) {
//     let sozlar = satr.split(' ');

//     let boshHarf = '';
//     let tugHarf = '';

//     for (let i = 0; i < sozlar.length; i++) {
//         let boshlanuvchi = sozlar[i][0].toUpperCase();

//         let tugovchi = sozlar[i][sozlar[i].length - 1].toUpperCase();

//         if (boshlanuvchi === tugovchi) {
//             boshHarf = boshlanuvchi;
//             tugHarf = tugovchi;
//             break;
//         }
//     }

//     if (boshHarf !== '' && tugHarf !== '') {
//         console.log("Boshlanuvchi va tugovchi harflari bir xil so'zlarni topdik: ", boshHarf, tugHarf);
//     } else {
//         console.log("Boshlanuvchi va tugovchi harflari bir xil so'z topilmadi.");
//     }
// }

// var inputSatr = "Salom Azizbek! Sizni hozirgi so'zingiz aniqlovchi dasturga xush kelibsiz.";
// aniqlovchiSozlar(inputSatr);


// String23.


// String24.

// function getMaxOfString(str) {
//     let sozlar = str.split(' ');

//     let engUzunSoz = '';

//     for (let i = 0; i < sozlar.length; i++) {
//         let soz = sozlar[i].replace(/[^a-zA-Z0-9]/g, '');

//         if (soz.length > engUzunSoz.length) {
//             engUzunSoz = soz;
//         }
//     }

//     return engUzunSoz;
// }

// let inputSatr = "Salom Azizbek! Sizni hozirgi so'zingizni aniqlaymiz.";
// let engUzunSoz = getMaxOfString(inputSatr);

// console.log("Eng uzun so'z: ", engUzunSoz);


// String25.


// String26.

// function almashtirish(str) {
//     let sozlar = str.split(' ');

//     for (let i = 0; i < sozlar.length; i++) {
//         let soz = sozlar[i];

//         if (soz.length > 0) {
//             sozlar[i] = soz.charAt(0).toUpperCase() + soz.slice(1);
//         }
//     }

//     return sozlar.join(' ');
// }

// let inputSatr = "salom azizbek! sizni hozirgi so'zingizni aniqlaymiz.";
// let natija = almashtirish(inputSatr);

// console.log("Yangi satr: ", natija);


// String27.

// function tinishBelgilariChiqar(str) {
//     let marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];

//     let oxirgiBelgilar = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//         let belgi = str[i];

//         if (marks.includes(belgi)) {
//             oxirgiBelgilar = belgi + oxirgiBelgilar;
//         } else {
//             break;
//         }
//     }

//     return oxirgiBelgilar;
// }

// let inputSatr = "Salom Aziza! Sizni hozirgi so'zingizni aniqlaymiz.";
// let natija = tinishBelgilariChiqar(inputSatr);

// console.log("Oxirgi tinish belgilari: ", natija);


// String28.

// function faylNomiAniqlovchi(satr) {
//     let elementlar = satr.split('/');

//     let faylNomi = elementlar[elementlar.length - 1];

//     let nuqtaIndeksi = faylNomi.lastIndexOf('.');

//     let kengaytmasizNomi = faylNomi.slice(0, nuqtaIndeksi);

//     return kengaytmasizNomi;
// }

// let inputSatr = "D:/Qudrat_c++/books/My_book.exe";
// let natija = faylNomiAniqlovchi(inputSatr);

// console.log("Fayl nomi (kengaytmasiz): ", natija);


// String29.

// function kengaytmaniAniqlovchi(satr) {
//     let elementlar = satr.split('/');

//     var faylNomi = elementlar[elementlar.length - 1];

//     let nuqtaIndeksi = faylNomi.lastIndexOf('.');

//     let kengaytma = faylNomi.slice(nuqtaIndeksi + 1);

//     return kengaytma;
// }

// let inputSatr = "D:/Qudrat_c++/books/My_book.exe";
// let natija = kengaytmaniAniqlovchi(inputSatr);

// console.log("Fayl kengaytmasi: ", natija);


// String30.

function oxirgiPapkaNominiAniqlovchi(satr) {
    let elementlar = satr.split('/');

    let oxirgiPapkaNomi = elementlar[elementlar.length - 2];

    if (oxirgiPapkaNomi === "") {
        oxirgiPapkaNomi = "/";
    }

    return oxirgiPapkaNomi;
}

let inputSatr = "D:/Qudrat_c++/books/My_book.exe";
let natija = oxirgiPapkaNominiAniqlovchi(inputSatr);

console.log("Oxirgi papka nomi: ", natija);
