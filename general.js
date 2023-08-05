// Code to update day constantly
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDay() - 2;
var hour = date.getHours();
var minute = date.getMinutes();
var seconds = date.getSeconds();

var date_id = document.getElementById("update-time");
date_id.innerHTML = year + "/" + month + "/" + day + " (West African Standard Time)";




