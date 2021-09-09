"use strict";

let username = "yash";
let password = "1234";

let usernameinput = document.querySelector(".username");
let passinput = document.querySelector(".password");
let loginbutton = document.querySelector(".logbutton");
let loginmodal = document.querySelector(".login");
let bankmodal = document.querySelector(".bankmain");
let logout = document.querySelector(".logout");
let error = document.querySelector(".error");
let errorbutton = document.querySelector(".errorclose");
let overlay = document.querySelector(".overlay");
let deposit = document.querySelector(".deposit");
let withdraw = document.querySelector(".withdraw");
let balancedisplay = document.querySelector(".balance");
let add = document.querySelector(".add");
let withtext = document.querySelector(".withtext");
let deptext = document.querySelector(".deptext");
let transations = document.querySelector(".tran");
let welcomeuser = document.querySelector(".user");
let loginback = document.getElementById("loginback");
let signuppage = document.querySelector(".signup");
let signupgobutton = document.querySelector(".signupbutton");

let bal = 1;
let flag;

signupgobutton.addEventListener("click", function () {
  loginmodal.classList.add("hide");
  signuppage.classList.remove("hide");
  overlay.classList.add("hide");
});

loginback.addEventListener("click", function () {
  loginmodal.classList.remove("hide");
  signuppage.classList.add("hide");
});

deposit.addEventListener("click", function () {
  withdraw.classList.add("hide");
  withtext.classList.add("hide");
  flag = 0;
});

withdraw.addEventListener("click", function () {
  deposit.classList.add("hide");
  deptext.classList.add("hide");
  flag = 1;
});

add.addEventListener("click", function () {
  let depamount = deposit.value;
  let withamount = withdraw.value;
  let finalbal;

  if (flag == 0) {
    finalbal = bal + Number(depamount);
    transations.textContent = `You deposited  ₹${depamount} into your savings account , Total balance is ${finalbal}                     `;
  } else if (flag == 1) {
    finalbal = bal - Number(withamount);
    transations.textContent = `You withdrew  ₹${withamount} from your savings account , Total balance is ${finalbal}  `;
  }

  balancedisplay.textContent = `₹${finalbal}`;

  console.log(finalbal);
  withdraw.classList.remove("hide");
  deposit.classList.remove("hide");
  withtext.classList.remove("hide");
  deptext.classList.remove("hide");

  bal = finalbal;

  //deposit.value = "";
  //withdraw.value = "";
});

logout.addEventListener("click", function () {
  console.log(usernameinput.value);

  loginmodal.classList.remove("hide");
  bankmodal.classList.add("hide");
});

overlay.addEventListener("click", function () {
  overlay.classList.add("hide");
});

var users = [{}];

document.getElementById("registerButton").onclick = function () {
  if (document.getElementById("registerName").value) {
    var newUsername = document.getElementById("registerName").value;
    var newPassword = document.getElementById("registerPassword").value;
    users.push({ username: newUsername, password: newPassword });
    document.getElementById(
      "loginResult"
    ).innerHTML = `Account created , ${newUsername} `;
    console.log(users);
  } else {
    alert("Kindly enter username and password");
  }
};

loginbutton.addEventListener("click", function () {
  var username = document.getElementById("loginName").value;
  var password = document.getElementById("loginPassword").value;
  for (var i = 0; i < users.length; i++) {
    if (username == users[i].username) {
      if (password == users[i].password) {
        loginmodal.classList.add("hide");
        bankmodal.classList.remove("hide");
        welcomeuser.textContent = `WELCOME  , ${username} `;
        overlay.classList.add("hide");
        return;
      }
    } else {
      console.log("hi");
      overlay.classList.remove("hide");
    }
  }
});
