<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.util.ArrayList" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="server.Dot" %>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lab1</title>
    <style>
        body{

            background-image: url("1.jpg");
            background-size: cover;
        }


        .block {
            background:yellow;
            border: 5px solid silver;
            border-radius: 15px;
            opacity: 0.9;
        }
        .block1 {
            background:#adcdd4;
            height:150px;

        }
        .words{
            color: blue;
        }
        .final{
            margin-top: 5px;
            text-align: center;
        }
        .block.block2 >.words{
            color:rgb(31, 31, 30);

        }

        .block2 {
            background:#FA88F3;
            margin-top: 10px;
            height:120px;
            width: 180px;
            border: 5px solid #FDDB6C;
            float: left;


        }
        .block3 {
            background:#88c7fa;
            height:400px;
            width: 400px;
            border: 5px solid #FDDB6C;
            float: left;
            margin-top: 10px;
            margin-left: 50px;


        }
        .block4 {
            overflow: auto;
            background:#88c7fa;
            height:400px;
            width: 400px;
            border: 5px solid #FDDB6C;
            float: left;
            margin-top: 10px;
            margin-left: 50px;


        }
        .graph {
            float: left;
            margin-top: 10px; /* Добавляем немного отступа между блоком и картинкой, при необходимости */
            margin-left: 50px; /* Добавляем немного отступа между блоком и картинкой, при необходимости */
            width: 300px; /* Ширина изображения */
            height: 150px; /* Высота изображения */

        }
        .button:active{
            background-color: green;
        }

    </style>
</head>
<body>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="js/main.js"></script>
<div class="block block1">
    <h2 class="words">Лабораторная работа 2</h2>
    <h2 class="words">Митичев Иван Дмитиевич P3216</h2>
    <h2 class="words">Варинт 231442</h2>
</div>

<div class="block block2">

    <label class="words">Введите X:</label>
    <select id="X" >
        <option>-5</option>
        <option>-4</option>
        <option>-3</option>
        <option>-2</option>
        <option>-1</option>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>

    </select>
    <br>
    <label class="words">Введите Y(-5...5):</label>
    <input type="text" maxlength="10" id="Y" value="0">
    <label class="words">Введите R:</label>
    <select id="R" onchange="changeR()">
        <option>1</option>
        <option>1.5</option>
        <option>2</option>
        <option>2.5</option>
        <option>3</option>
    </select>
    <br>
    <button class="button" onclick="onClickButton()">Посчитать</button>
    <br>
    <span id="result" >Ожидание ввода</span>


</div>
<div class="block block3">
    <canvas id="myCanvas" width="400" height="400"></canvas>
</div>
<script src="js/canvas.js"></script>


<!-- </form><img src="2.jpg" class="graph looooooool"> -->
<div class="block block4" >
    <table border="1">
        <thead>
        <tr>
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>current time</th>
            <th>script time</th>
            <th>result</th>
        </tr>
        </thead>
        <tbody id="tbody">
        <%
            HttpSession httpsession = request.getSession();
            ArrayList<Dot> dotsList = (ArrayList<Dot>) httpsession.getAttribute("dotsList");
            if (dotsList != null) {
                for (Dot dot : dotsList) {
        %>
        <tr>
            <td><%= dot.getX() %></td>
            <td><%= dot.getY() %></td>
            <td><%= dot.getR() %></td>
            <td><%= dot.getCurrentTime() %></td>
            <td><%= dot.getScriptTime() %></td>
            <td><%= dot.getResult() %></td>
        </tr>
        <%
                }
            }
        %>
        </tbody>
    </table>
</div>
<script>
    function drawAllDots(){
        let RCheck = $("#R").val();
        if (RCheck === "") {
            return;
        }
        <c:forEach var="dot" items="${dotsList}">
        if('${dot.getResult()}'==='true'){
            GOODXY(${dot.getX()/dot.getR()}*RCheck, ${dot.getY()/dot.getR()}*RCheck);
        }else{
            changeXY(${dot.getX()/dot.getR()}*RCheck, ${dot.getY()/dot.getR()}*RCheck);
        }
        </c:forEach>
    }
    drawAllDots();
</script>


</body>
</html>
