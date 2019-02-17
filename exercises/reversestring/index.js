// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //split string into array in order to use .reverse method
  string = str.split('')
  //reverse array of letters using .reverse method
  reversed = string.reverse()
  //join the reversed array to convert it back into a string
  final = reversed.join('')
  return final
}

module.exports = reverse;
