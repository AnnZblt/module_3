const container = document.createElement('div');
const phraseInput = document.createElement('input');
const phraseParagraph = document.createElement('p');
const paragraphPlaceHolder = 'Тут будет фраза из инпута';
let inputTimer;

phraseInput.placeholder = 'Напишите здесь что-нибудь';
document.body.append(container);
container.append(phraseInput, phraseParagraph);
container.classList.add('container');


phraseParagraph.textContent = paragraphPlaceHolder;

phraseInput.addEventListener('input', event => {
  if (event) {
    clearTimeout(inputTimer);
  }
  inputTimer = setTimeout(() => {
    const inputText = event.target.value;
    if (inputText.trim() === '') {
      phraseParagraph.textContent = paragraphPlaceHolder;
    } else {
      phraseParagraph.textContent = event.target.value;
      console.log(phraseParagraph);
    }
  }, 300);
});
