
function changeXY(X,Y){
  var num = parseFloat(Y);
  if (!isNaN(num) && num > -5 && num < 5) {
    // Переводим координаты в соответствующие значения на холсте
    var canvasX = centerX + X * 20; // Примерный масштаб: 1 по оси = 20 пикселей
    var canvasY = centerY - Y * 20; // Учитывается инверсия оси Y на холсте

// Рисуем точку
    ctx.beginPath();
    ctx.arc(canvasX, canvasY, 3, 0, Math.PI * 2); // Радиус точки = 3 пикселя
    ctx.fillStyle = 'red'; // Цвет точки
    ctx.fill();
  }
}
function GOODXY(X,Y){
  var num = parseFloat(Y);
  if (!isNaN(num) && num > -5 && num < 5) {
    // Переводим координаты в соответствующие значения на холсте
    var canvasX = centerX + X * 20; // Примерный масштаб: 1 по оси = 20 пикселей
    var canvasY = centerY - Y * 20; // Учитывается инверсия оси Y на холсте

// Рисуем точку
    ctx.beginPath();
    ctx.arc(canvasX, canvasY, 3, 0, Math.PI * 2); // Радиус точки = 3 пикселя
    ctx.fillStyle = 'green'; // Цвет точки
    ctx.fill();
  }
}

function changeR(){
  var R=document.getElementById('R').value;
  R=R*20;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Новые координаты точек относительно центра холста
  
 // Рисование оси X с стрелкой на конце
ctx.beginPath();
ctx.moveTo(20, centerY);
ctx.lineTo(canvas.width - 20, centerY);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width - 20, centerY);
ctx.lineTo(canvas.width - 30, centerY - 5);
ctx.lineTo(canvas.width - 30, centerY + 5);
ctx.fillStyle = "black";
ctx.fill();

// Рисование делений на оси X
for (var x = 40; x < canvas.width - 30; x += 20) {
  ctx.moveTo(x, centerY - 3);
  ctx.lineTo(x, centerY + 3);
  ctx.stroke();
}

// Рисование оси Y с стрелкой на конце
ctx.beginPath();
ctx.moveTo(centerX, 20);
ctx.lineTo(centerX, canvas.height - 20);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(centerX, 20);
ctx.lineTo(centerX - 5, 30);
ctx.lineTo(centerX + 5, 30);
ctx.fillStyle = "black";
ctx.fill();

// Рисование делений на оси Y
for (var y = 40; y < canvas.height - 30; y += 20) {
  ctx.moveTo(centerX - 3, y);
  ctx.lineTo(centerX + 3, y);
  ctx.stroke();
}

// Добавление меток
ctx.fillStyle = "black";
ctx.fillText("X", canvas.width - 20, centerY - 10);
ctx.fillText("Y", centerX + 20, 30);

ctx.fillText("R", centerX + R, centerY + R/3);

ctx.fillStyle = "rgba(20, 60, 200, 0.5)"; // Голубой с прозрачностью 0.5
  ctx.fillRect(centerX, centerY, -R/2, -R); // Координаты (50, 50) и размеры (200x100)



// Новые координаты точек относительно центра холста
  var x1 = centerX; // Горизонтальная линия начинается в центре
  var y1 = centerY; // Вниз

  var x2 = centerX - R/2; // Влево
  var y2 = centerY;

  var x3 = centerX;
  var y3 = centerY + R; // Вверх

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.fill();


  ctx.beginPath();
  ctx.arc(centerX, centerY, R, 0, Math.PI/2 ); // Координаты (200, 200), радиус 100, угол от 0 до Pi/2 (четверть круга)
  ctx.lineTo(centerX, centerY); // Соединить с центром для закрытия фигуры
  ctx.closePath(); // Завершить четверть круга
  ctx.fill();
  drawAllDots();

}

function getDotsFromTable() {
  var dots = [];
  var table = document.getElementById('tbody'); // Получаем таблицу по id

  // Перебираем строки таблицы, пропуская первую строку (заголовок)
  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i]; // Получаем строку таблицы
    var x = parseFloat(row.cells[0].innerHTML); // Получаем значение X из первой ячейки
    var y = parseFloat(row.cells[1].innerHTML); // Получаем значение Y из второй ячейки
    var r = parseFloat(row.cells[2].innerHTML); // Получаем значение Y из второй ячейки
    var result = parseFloat(row.cells[5].innerHTML); // Получаем значение Y из второй ячейки

    // Создаем объект точки и добавляем его в массив dots
    var dot = {
      x: x,
      y: y,
      r: r,
      result:result
    };
    dots.push(dot);
  }
  return dots;
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var R=document.getElementById('R').value;
R=R*20;

// Рисование оси X с стрелкой на конце
ctx.beginPath();
ctx.moveTo(20, centerY);
ctx.lineTo(canvas.width - 20, centerY);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width - 20, centerY);
ctx.lineTo(canvas.width - 30, centerY - 5);
ctx.lineTo(canvas.width - 30, centerY + 5);
ctx.fillStyle = "black";
ctx.fill();

// Рисование делений на оси X
for (var x = 40; x < canvas.width - 30; x += 20) {
  ctx.moveTo(x, centerY - 3);
  ctx.lineTo(x, centerY + 3);
  ctx.stroke();
}

// Рисование оси Y с стрелкой на конце
ctx.beginPath();
ctx.moveTo(centerX, 20);
ctx.lineTo(centerX, canvas.height - 20);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(centerX, 20);
ctx.lineTo(centerX - 5, 30);
ctx.lineTo(centerX + 5, 30);
ctx.fillStyle = "black";
ctx.fill();

// Рисование делений на оси Y
for (var y = 40; y < canvas.height - 30; y += 20) {
  ctx.moveTo(centerX - 3, y);
  ctx.lineTo(centerX + 3, y);
  ctx.stroke();
}

// Добавление меток
ctx.fillStyle = "black";
ctx.fillText("X", canvas.width - 20, centerY - 10);
ctx.fillText("Y", centerX + 20, 30);

ctx.fillText("R", centerX + R, centerY + R/3);

ctx.fillStyle = "rgba(20, 60, 200, 0.5)"; // Голубой с прозрачностью 0.5
ctx.fillRect(centerX, centerY, -R/2, -R); // Координаты (50, 50) и размеры (200x100)



// Новые координаты точек относительно центра холста
var x1 = centerX; // Горизонтальная линия начинается в центре
var y1 = centerY; // Вниз

var x2 = centerX - R/2; // Влево
var y2 = centerY;

var x3 = centerX;
var y3 = centerY + R; // Вверх

ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.lineTo(x3, y3);
ctx.closePath();
ctx.fill();


ctx.beginPath();
ctx.arc(centerX, centerY, R, 0, Math.PI/2 ); // Координаты (200, 200), радиус 100, угол от 0 до Pi/2 (четверть круга)
ctx.lineTo(centerX, centerY); // Соединить с центром для закрытия фигуры
ctx.closePath(); // Завершить четверть круга
ctx.fill();

// Добавляем обработчик события клика на холсте
canvas.addEventListener("click", function(event) {
  var rect = canvas.getBoundingClientRect();
  var canvasX = event.clientX - rect.left;
  var canvasY = event.clientY - rect.top;

  var X = (canvasX - centerX) / 20; // Обратный перевод масштаба: 20 пикселей = 1 по оси
  var Y = (centerY - canvasY) / 20; // Инверсия оси Y на холсте

  // Ограничение по X
  if (X > 3) {
    alert('Точка уходит за пределы по X');
    return;
  } else if (X < -5) {
    alert('Точка уходит за пределы по X');
    return;
  }

  // Ограничение по Y
  if (Y > 5) {
    alert('Точка уходит за пределы по Y');
    return;

  } else if (Y < -5) {
    alert('Точка уходит за пределы по Y');
    return;
  }
  X=Math.round(X);
  // Установка значений в поля ввода
  document.getElementById('X').value = X;
  switch (X) {
    case 3:
      canvasX=260
      break;
    case 2:
      canvasX=240
      break;
    case 1:
      canvasX=220
      break;
    case 0:
      canvasX=200
      break;
    case -1:
      canvasX=180
      break;
    case -2:
      canvasX=160
      break;
    case -3:
      canvasX=140
      break;
    case -4:
      canvasX=120
      break;
    case -5:
      canvasX=100
      break;
  }
  document.getElementById('Y').value = Y;
onClickButton();


});