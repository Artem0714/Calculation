

function getValue0(){
    // document.getElementById("display").value
    // = document.getElementById("submit0").value;
    // calculstion.num1 = document.getElementById("submit0").value;
    // document.getElementById("display").value = calculstion.num1;
    localStorage.setItem('num1', document.getElementById("submit0").value);
    return document.querySelector(".inputString").value = localStorage.getItem('num1');
}

function getValue1(){
    let text1 = document.getElementById("submit1").value;
    alert(text1);
}

function getValue2(){
    let text2 = document.getElementById("submit2").value;
    alert(text2);
}

function getValue3(){
    let text3 = document.getElementById("submit3").value;
    alert(text3);
}

function getValue4(){
    let text4 = document.getElementById("submit4").value;
    alert(text4);
}

function getValue5(){
    let text5 = document.getElementById("submit5").value;
    alert(text5);
}

function getValue6(){
    let text6 = document.getElementById("submit6").value;
    alert(text6);
}

function getValue7(){
    let text7 = document.getElementById("submit7").value;
    alert(text7);
}

function getValue8(){
    let text8 = document.getElementById("submit8").value;
    alert(text8);
}

function getValue9(){
    let text9 = document.getElementById("submit9").value;
    alert(text9);
}

function getValuePoint(){
    let textPoint = document.getElementById("submitPoint").value;
    alert(textPoint);
}