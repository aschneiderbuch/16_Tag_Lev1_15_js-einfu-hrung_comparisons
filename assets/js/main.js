let num = 5
console.log(num)

let  anotherNum = 8
console.log(anotherNum)

let ergebniss = (num == anotherNum) // false
ergebniss = (num > anotherNum) // false
ergebniss = (num < anotherNum) // true
ergebniss = (num >= anotherNum) // false
ergebniss = (num <= anotherNum) // ture

ergebniss = (num == "5") // true
ergebniss = (num === "5") // false
ergebniss = !(num == "5") // false
ergebniss = (!num == "5") // false
ergebniss = (num == !"5") // flase

ergebniss = (num != "5") // false
ergebniss = (num !== "5") // true

ergebniss = (num != 8) // true
ergebniss = (num != "5") // false






document.write("num: =" + num)

document.write("<br>" +  "anotherNum: =" + anotherNum)

document.write("<br>" + "ergebniss: =" + ergebniss)

console.log(ergebniss)