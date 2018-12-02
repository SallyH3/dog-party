var nameButton = document.querySelector('.header-button');

nameButton.addEventListener('click', function (e) {
  e.preventDefault();
  replaceTitleText();
});

function replaceTitleText() {
  var titleText = document.querySelector('.main-title-text-bold');
  var nameInput = document.getElementById('name-input');
  titleText.innerHTML = nameInput.value;
  nameInput.value = "";
}