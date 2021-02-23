// function isVowel(letter) {
//     letter = letter.toLowerCase()
//     if (letter == "a"|| letter == "e" || letter == "i" || letter == "o" || letter == "u") {
//         return true
//     }
//     else {
//         return false
//     }

// }
// console.log(isVowel("a"))
// console.log(isVowel("b"))
// console.log(isVowel("A"))



// let reverse_word = ""

// function isPalindrome(word) {
// for (let index = word.length-1;index >= 0; index--) {
//   reverse_word += (word[index])
// }
// if (word == reverse_word) {
// 	return true
// }
// else {
// return false
// }
// }

// function duplicate(array) {
//     var unique_array = []
//     for (let index=0; index <= array.length; index++) {
//         if (unique_array.indexOf(array[index])===-1) {
//             unique_array.push(array[index]);
//         }
//     }
//     console.log(unique_array)
// }

// let people = ["John", "Mary", "Susan", "Dan", "John","Rob", "Susan"]
// duplicate(people)

// let items = ["eggs","milk","eggs", "donuts", "water", "pizza"]

// function search(things) {
//     for (let index = 0; index <=items.length; index++) {
//         if (items[index] === things ){
//             return true
//     }
// }
//         return false

    
// }

numbers = [1,23,76,3,43,49,98,24]

for (let index = 0; index <=numbers.length; index++) {
    if (numbers[index] > numbers [index +1]){
        numbers[index] == numbers[index+1] && numbers [index+1] == numbers [index]
    }
    else {numbers[index] == numbers[index]
        
    }
}

console.log(numbers)


