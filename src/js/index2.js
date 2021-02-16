import '../css/style.scss';

const textComponent = () => {
  const elH1 = document.createElement('h1');
  elH1.innerHTML = 'Mundo';
  elH1.classList.add('title');
  return elH1;
}

document.body.appendChild(textComponent());