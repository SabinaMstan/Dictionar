let dictionary = [];

document.getElementById('userInput').addEventListener('keyup', function(event) {
  let buttonId;
  if (event.keyCode === 13 && document.getElementById('submitWord').input.id === 'addWord') {
    buttonId = 'submitWord';
  } else if (event.keyCode === 13  && document.getElementById('search').input.id === 'searchWord') {
    buttonId = 'search';
  }
    event.preventDefault();
    document.getElementById(buttonId).click();
});

function getInputFromTextBox() {
  let input = document.getElementById('addWord').value;
  document.getElementById('addWord').value = '';
  addWord(input);
}

function addWord(input) {
  dictionary.push(input);
  //alert(dictionary);
}

function searchWordInDictionary() {
  let word = document.getElementById('searchWord').value;
  let found = document.getElementById('foundStatus');
  let foundStatus = document.createElement('p');
  document.getElementById('searchWord').value = '';
  if (dictionary.includes(word)) {
    foundStatus.innerHTML = `${word} - found`;
  } else {
    foundStatus.innerHTML = `${word} - not found`;
  }
  found.appendChild(foundStatus);
}
