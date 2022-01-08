let dictionary = [];

function getInputFromTextBox() {
  let input = document.getElementById('userInput').value;
  addWord(input);
  document.getElementById('userInput').value = '';
}

function addWord(input) {
  dictionary.push(input);
//alert(dictionary);
}

function searchWordInDictionary() {
  let word = document.getElementById('searchWord').value;
  if (dictionary.includes(word)) {
    alert('found');
  } else {
    alert ('not found');
  }
}
