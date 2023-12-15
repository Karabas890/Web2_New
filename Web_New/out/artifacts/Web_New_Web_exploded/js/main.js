
function onClickButton(){
    //localStorage.setItem('tbody', document.getElementById("tbody").innerHTML);

    var X = document.getElementById('X').value;
    var Y = document.getElementById('Y').value;
    var R = document.getElementById('R').value;
    changeXY(X,Y);
    //console.log(Y);
    var num = parseFloat(Y);
    var resultElement = document.getElementById("result");
    if (!isNaN(num) && num > -5 && num < 5) {
        resultElement.textContent = "Все ОК";
        resultElement.style.color="green";
        $.ajax({
            url: "Controller",
            type: "POST",
            cache: false,
            data: {'x': X, 'y': Y, 'r': R},
            dataType: "html",
            success: function (data) {
                $("#tbody").append(data);

                // Проверка результата из сервера
                var result = $(data).find('td:last').text().trim(); // Получаем текст из последней ячейки
                //alert(result);
                if (result === 'true') {
                    GOODXY(X, Y); // Вызываем GOODXY, если результат true
                } else {
                    changeXY(X, Y); // Иначе вызываем changeXY
                }
            }
        });
        //saveDataToLocalStorage();
        
    } else {
        resultElement.textContent = "Недопустимое значение";
        resultElement.style.color="red";
    }

}
// Сохранение значений полей в localStorage при изменении

document.getElementById('R').addEventListener('input', function() {
    console.log(document.getElementById('R').value);
    localStorage.setItem('R_value', document.getElementById('R').value);
});

document.getElementById('X').addEventListener('input', function() {
    console.log(document.getElementById('X').value);
    localStorage.setItem('X_value', document.getElementById('X').value);
});

document.getElementById('Y').addEventListener('input', function() {
    console.log(document.getElementById('Y').value);
    localStorage.setItem('Y_value', document.getElementById('Y').value);
});

// Проверка localStorage при загрузке страницы и восстановление значений полей
window.addEventListener("load", function () {
    var R_value = localStorage.getItem('R_value');
    var X_value = localStorage.getItem('X_value');
    var Y_value = localStorage.getItem('Y_value');

    if (R_value !== null) {
        document.getElementById('R').value = R_value;
    }
    if (X_value !== null) {
        document.getElementById('X').value = X_value;
    }
    if (Y_value !== null) {
        document.getElementById('Y').value = Y_value;
    }
});

