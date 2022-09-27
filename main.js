const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const num3 = document.querySelector('.num3');
const num4 = document.querySelector('.num4');
const num5 = document.querySelector('.num5');
const num6 = document.querySelector('.num6');
const num7 = document.querySelector('.num7');
const num8 = document.querySelector('.num8');
const num9 = document.querySelector('.num9');
const num0 = document.querySelector('.num0');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const equal = document.querySelector('.equal');
const textbar = document.querySelector('.textbar');
const cancel = document.querySelector('.cancel');

num1.addEventListener('click', function(){
  textbar.textContent += num1.textContent;
})
num2.addEventListener('click', function() {
  textbar.textContent += num2.textContent;
})
num3.addEventListener('click', function() {
  textbar.textContent += num3.textContent;
})
num4.addEventListener('click', function() {
  textbar.textContent += num4.textContent;
})
num5.addEventListener('click', function() {
  textbar.textContent += num5.textContent;
})
num6.addEventListener('click', function() {
  textbar.textContent += num6.textContent;
})
num7.addEventListener('click', function() {
  textbar.textContent += num7.textContent;
})
num8.addEventListener('click', function() {
  textbar.textContent += num8.textContent;
})
num9.addEventListener('click', function() {
  textbar.textContent += num9.textContent;
})
num0.addEventListener('click', function() {
  textbar.textContent += num0.textContent;
})
plus.addEventListener('click', function() {
  textbar.textContent += plus.textContent;
})
minus.addEventListener('click', function() {
  textbar.textContent += minus.textContent;
})
multiply.addEventListener('click', function() {
  textbar.textContent += multiply.textContent;
})
divide.addEventListener('click', function() {
  textbar.textContent += divide.textContent;
})
equal.addEventListener('click', function(){
    if ((textbar.textContent.slice(0, 1)) == 'ㅤ') {
      result = eval(textbar.textContent.substring(1));
    } 
    else {
      result = eval(textbar.textContent);
    }
  console.log(result);
  textbar.textContent = result;
});
cancel.addEventListener('click', function(){
  textbar.textContent = 'ㅤ';
});
