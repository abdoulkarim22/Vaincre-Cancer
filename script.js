const divElement = document.querySelector('.bg-info');
const ulElement = divElement.querySelector('ul');
const iconElement = divElement.querySelector('::after');

divElement.addEventListener('click', toggleListDisplay);

function toggleListDisplay() {
  if (ulElement.style.display === 'none') {
    ulElement.style.display = 'block';
    iconElement.style.content = '-';
    divElement.classList.add('open');
  } else {
    ulElement.style.display = 'none';
    iconElement.style.content = '+';
    divElement.classList.remove('open');
  }
}
