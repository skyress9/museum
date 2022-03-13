const minusBasic = document.getElementById('minus-basic');
const plusBasic = document.getElementById('plus-basic');
const inputBasic = document.getElementById('basic');
const minusSenior = document.getElementById('minus-senior');
const plusSenior = document.getElementById('plus-senior');
const inputSenior = document.getElementById('senior');
const total = document.querySelector('.amount__total span');
const inputs = document.querySelectorAll('.tickets__radio_button');


minusBasic.addEventListener('click', () => {
  inputBasic.value <= 0 ? true : inputBasic.value--;
  console.log(inputBasic.value)
  calculate()
})

plusBasic.addEventListener('click', () => {
  inputBasic.value >= 20 ? true : inputBasic.value++;
  console.log(inputBasic.value)
  calculate()
})

minusSenior.addEventListener('click', () => {
  inputSenior.value <= 0 ? true : inputSenior.value--;
  calculate()
})

plusSenior.addEventListener('click', () => {
  inputSenior.value >= 20 ? true : inputSenior.value++;
  calculate()
})

inputs.forEach(e => e.addEventListener('click', calculate));

function calculate() {
  let checked;
  inputs.forEach(e => e.checked == true ? checked = Number(e.value) : false);
  
  total.innerHTML = (inputBasic.value * checked) + (inputSenior.value * (checked / 2));
}

calculate();