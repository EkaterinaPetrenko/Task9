let clearButton = document.querySelector('#butClear');
let newGen = document.querySelector('#butGen');

/* Обработчик нажатия на кнопку "Сгенерировать новые данные" */
newGen.addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('parentNameOutput').innerText = initPerson.parentName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDateOutput').innerText = initPerson.birthDate;
    document.getElementById('profOutput').innerText = initPerson.profession;
})

/* Обработчик нажатия на кнопку "Очистить" */
clearButton.addEventListener('click', () => {
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('parentNameOutput').innerText = "";
    document.getElementById('profOutput').innerText = "";
    document.getElementById('genderOutput').innerText = "Пол";
    document.getElementById('birthDateOutput').innerText = "дата рождения";

})

