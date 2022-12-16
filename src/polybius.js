// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {
    // your solution code here
    //delete white space from input for length check
    let stripped= input.split(" ")
    stripped = stripped.join("")
    let lowerInput = input.toLowerCase()
    let newMessage =[]
    let numberPair = ""
    const encoder = { 'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 'h': '32', 'i/j': '42', 'k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55' };
    const decoder = { '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '12': 'f', '22': 'g', '32': 'h', '42': 'i/j', '52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z' };
    if(encode){
      for (let letter of lowerInput){
        if (letter === " "){
          newMessage.push(" ")
          } else {
          if (letter === 'j'){
            letter = 'i/j'
          }
          if (letter === 'i'){
            letter = 'i/j'
          }
          newMessage.push(encoder[letter])
          }}} 
    else {
          if (stripped.length%2 != 0){ return false}
              for (let i = 0; i<lowerInput.length; i+=2){
                //increment i by 2 to get pairs, except if a space is found
                if (lowerInput[i]===" "){
                  newMessage.push(" ")
                  i = i - 1
                } else {
                numberPair=lowerInput[i]+lowerInput[i+1]
                newMessage.push(decoder[numberPair])
                }
          }
    }
    return newMessage.join("")
  } 

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
