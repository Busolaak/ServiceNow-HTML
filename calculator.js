`use strict`

import * as DOM from './domchallenge.js';

//create element
DOM.btnAdd.onclick = () => add(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnSub.onclick = () => sub(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnDiv.onclick = () => div(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnMult.onclick = () => mult(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnClear.onclick = () => clear();
//Add
function add (num1, num2)
{
    let op = "+";
    let ans = 0;
    ans = +num1 + +num2;
    disp(num1, num2, op, ans);
}

//subtract
function sub (num1, num2)
{
    let op = "-";
    let ans = 0;
    ans = +num1 - +num2;
    disp(num1, num2, op, ans);
}

//divide
function div (num1, num2)
{
    let op = "/";
    let ans = 0;
    ans = +num1 / +num2;
    disp(num1, num2, op, ans);
}
//multiply
function mult (num1, num2)
{
    let op = "*";
    let ans = 0;
    ans = +num1 * +num2;
    disp(num1, num2, op, ans);
}

//Adds to list
function disp(num1, num2, op, ans)
{
    let tst = document.createElement(`li`);
    tst.innerHTML = num1 + "" + op + "" + num2 + "=" + ans;
    DOM.output.appendChild(tst);
}

//clear
function clear()
{
    DOM.inputOne.value = "";
    DOM.inputTwo.value = "";
    document.getElementById("list_output").innerHTML = "";
}