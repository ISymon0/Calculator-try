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
const del = document.querySelector('.del');
textbar.textContent = 'ㅤ';

const play = function () {
  let audio = new Audio('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-77317/zapsplat_multimedia_button_click_fast_short_004_79288.mp3')
  audio.play();
}

num1.addEventListener('click', function () {
  textbar.textContent += num1.textContent;
  play();
})
num2.addEventListener('click', function () {
  textbar.textContent += num2.textContent;
  play();
})
num3.addEventListener('click', function () {
  textbar.textContent += num3.textContent;
  play();
})
num4.addEventListener('click', function () {
  textbar.textContent += num4.textContent;
  play();
})
num5.addEventListener('click', function () {
  textbar.textContent += num5.textContent;
  play();
})
num6.addEventListener('click', function () {
  textbar.textContent += num6.textContent;
  play();
})
num7.addEventListener('click', function () {
  textbar.textContent += num7.textContent;
  play();
})
num8.addEventListener('click', function () {
  textbar.textContent += num8.textContent;
  play();
})
num9.addEventListener('click', function () {
  textbar.textContent += num9.textContent;
  play();
})
num0.addEventListener('click', function () {
  textbar.textContent += num0.textContent;
  play();
})
plus.addEventListener('click', function () {
  textbar.textContent += plus.textContent;
  play();
})
minus.addEventListener('click', function () {
  textbar.textContent += minus.textContent;
  play();
})
multiply.addEventListener('click', function () {
  textbar.textContent += multiply.textContent;
  play();
})
divide.addEventListener('click', function () {
  textbar.textContent += divide.textContent;
  play();
})
equal.addEventListener('click', function () {
  if ((textbar.textContent.slice(0, 1)) == 'ㅤ') {
    result = eval(textbar.textContent.substring(1));
  }
  else {
    result = eval(textbar.textContent);
  }
  console.log(result);
  textbar.textContent = 'ㅤ' + result;
  play();
});
cancel.addEventListener('click', function () {
  textbar.textContent = 'ㅤ';
  play();
});
del.addEventListener('click', function () {
  if ((textbar.textContent.slice(0, -1)) + 'ㅤ' == 'ㅤ') {

  } else {
    let delText = textbar.textContent.slice(0, -1);
    textbar.textContent = delText;
  }
  play();
});
