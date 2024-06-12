let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")

btn1.addEventListener("click", function(){
    if(tg.MainButton.isVisible && item == "1") {
        tg.MainButton.hide();
        tg.MainButton.color = "#d4a066"; // Сброс цвета кнопки
        item = "";
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 1!")
        item = "1";
        tg.MainButton.color = "#90ee90"; // Устанавливаем цвет кнопки
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function(){
    if(tg.MainButton.isVisible && item == "2") {
        tg.MainButton.hide();
        tg.MainButton.color = "#d4a066"; // Сброс цвета кнопки
        item = "";
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 2!")
        item = "2";
        tg.MainButton.color = "#90ee90"; // Устанавливаем цвет кнопки
        tg.MainButton.show();
    }
});

btn3.addEventListener("click", function(){
    if(tg.MainButton.isVisible && item == "3") {
        tg.MainButton.hide();
        tg.MainButton.color = "#d4a066"; // Сброс цвета кнопки
        item = "";
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 3!")
        item = "3";
        tg.MainButton.color = "#2cab37"; // Устанавливаем цвет кнопки
        tg.MainButton.show();
    }
});

btn4.addEventListener("click", function(){
    if(tg.MainButton.isVisible && item == "4") {
        tg.MainButton.hide();
        tg.MainButton.color = "#d4a066"; // Сброс цвета кнопки
        item = "";
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 4!")
        item = "4";
        tg.MainButton.color = "#2cab37"; // Устанавливаем цвет кнопки
        tg.MainButton.show();
    }
});

btn5.addEventListener("click", function(){
    if(tg.MainButton.isVisible && item == "5") {
        tg.MainButton.hide();
        tg.MainButton.color = "#d4a066"; // Сброс цвета кнопки
        item = "";
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 5!")
        item = "5";
        tg.MainButton.color = "#2cab37"; // Устанавливаем цвет кнопки
        tg.MainButton.show();
    }
});

btn6.addEventListener("click", function(){
    if(tg.MainButton.isVisible && item == "6") {
        tg.MainButton.hide();
        tg.MainButton.color = "#d4a066"; // Сброс цвета кнопки
        item = "";
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 6!")
        item = "6";
        tg.MainButton.color = "#2cab37"; // Устанавливаем цвет кнопки
        tg.MainButton.show();
    }
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item); 
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.first_name}
${tg.initDataUnsafe.last_name}`

usercard.appendChild(p);
