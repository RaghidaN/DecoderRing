// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //helper function to find object key using object value
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  
  function substitution(input, alphabet, encode = true) {
    //return false if alphabet is missing
    if (alphabet === undefined){ 
      return false}
    // //return false if alphabet !=== 26 char
    if (alphabet.length != 26){ 
      return false}

    //return false if alphabet repeats characters
    //loop through alphabet, create object, key is character
    let rptObj = {}
    let specLetter
    for (let i = 0; i<alphabet.length; i++){
      specLetter = alphabet[i]
      if (rptObj.hasOwnProperty(specLetter)){
        return false
      }else{
        rptObj[specLetter] = ''}
    }

    //if key is in object, return false
    //otherwise add it to it

    const originalAlphabet = "abcdefghijklmnopqrstuvwxyz"
    let lowerInput = input.toLowerCase()
    let obj = {}
    let newMessage = ""
    originalAlphabet.split("").forEach((letter, i) => obj[letter] = alphabet[i])
    //combine alphabets into object with key:value of originalAlpha : alpha
    //for each letter in lowerInput, find in object, return value
    

    for (let letter of lowerInput){
      if (letter === " "){
        newMessage += " "
      } else if (encode) {
        newMessage += obj[letter]
      } else {
        let key = getKeyByValue(obj, letter)
        newMessage += key
      }
    }
    //append values to new string
    //if it's a space, keep it
    return newMessage
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
