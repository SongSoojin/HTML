var elem = document.getElementById('txt');
console.log(elem); // null

// 함수를 선언하면 컴파일러가 함수를 발견할때 객체처리를 한다.
// 하지만 함수의 로직이 수행되는것은 아닙니다.
function proceed() {
var elem = document.getElementById('txt');
//console.log(elem.value);

// 뭐가 다르냐 <li>올</li><li>1</li><li>2</li><li>3</li>
// 뭐가 다르냐 <li>올</li><li>1</li><li>2</li><li>3</li>
var targetElem = document.getElementById('target');
    targetElem.innerText = elem.value;

// 뭐가 다르냐 <li>올</li><li>1</li><li>2</li><li>3</li>
// 뭐가 다르냐
// 올
// 1
// 2
// 3
// 해보길 요망
var targetElem2 = document.getElementById('target2');
    targetElem2.innerHTML = elem.value;
  // innerText :
}