const container = document.createElement('div');
const phraseInput = document.createElement('input');
const phraseParagraph = document.createElement('p');
let timer;

phraseInput.placeholder = 'Напишите здесь что-нибудь';
document.body.append(container);
container.append(phraseInput, phraseParagraph);
container.classList.add('container');


phraseParagraph.textContent = 'Тут будет фраза из инпута';

phraseInput.addEventListener('input', event => {
  if (event) {
    clearInterval(timer);
  }
  timer = setInterval(() => {
    phraseParagraph.textContent = event.target.value;
    console.log(phraseParagraph);
  }, 300);
});
