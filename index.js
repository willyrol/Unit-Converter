/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let userInput = document.getElementById("number");
let convertButton = document.getElementById("convert");
const lengthEl = document.getElementById("hLength");
const volumeEl = document.getElementById("hVolume");
const massEl = document.getElementById("hMass");

convertButton.addEventListener("click", displayResult); 

function displayResult(){
    const num = +userInput.value;
    const len = convertLength(num);
    const volume = convertVolume(num);
    const mass = convertMass(num);
    
    lengthEl.textContent = `${num} meters = ${len[0]} feet | ${num} feet = ${len[1]} meters`;
    volumeEl.textContent = `${num} liters = ${volume[0]} gallons | ${num} gallons = ${volume[1]}   liters`;
    massEl.textContent = `${num} kilos = ${mass[0]} pounds | ${num} pounds = ${mass[1]} kilos`;
}


function convertLength(numberToConvert) {
  const metersToFeet = numberToConvert * 3.28084;
  const feetToMeters = numberToConvert / 3.28084;
  const lengthResult = roundNumber(metersToFeet, feetToMeters);
  return lengthResult;
}

function convertVolume(numberToConvert) {
  const litersToGallons = numberToConvert * 0.2641;
  const gallonsToLiters = numberToConvert / 0.2641;
  const volumeResult = roundNumber(litersToGallons, gallonsToLiters);
  return volumeResult;
}

function convertMass(numberToConvert) {
  const kilostoPounds = numberToConvert * 2.20462;
  const poundsToKilos = numberToConvert / 2.20462;
  const massResult = roundNumber(kilostoPounds, poundsToKilos);
  return massResult;
}

function roundNumber(...numbersToRound) {
  const roundedNumbers = numbersToRound.map((number) => number.toFixed(3));
  return roundedNumbers;
}
