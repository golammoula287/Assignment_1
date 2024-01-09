let AGE_NUMBER = 18;
const inputField = document.getElementById("ageInput");
const mainBanner = document.querySelector(".Bn-section");
const submitButton = document.querySelector('button');

const adultCard = document.querySelector(".adult");
const teenageCard = document.querySelector(".teenage");

submitButton.addEventListener('click', inputHandler);

function inputHandler() {
    let inputValue = Number(inputField.value);
    if (inputValue >= AGE_NUMBER) {
        adultCard.classList.add("active_adult");
        teenageCard.classList.remove('active_teenage');
        //mainBanner.classList.add("remove_banner");
    }
    if (inputValue < AGE_NUMBER) {
        teenageCard.classList.add("active_teenage");
        adultCard.classList.remove("active_adult");
        //mainBanner.classList.add("remove_banner");
    }
}
