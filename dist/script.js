"use strict";
const nDay = document.querySelector(".n-day");
const nHour = document.querySelector(".n-hour");
const nMin = document.querySelector(".n-min");
const nSecond = document.querySelector(".n-sec");
const nMs = document.querySelector(".n-ms");
const title1 = document.querySelector(".title.first");
const title2 = document.querySelector(".title.second");
const dCheck = new Date();
if (dCheck.getFullYear() == 2024) {
    title1.classList.toggle("hide", true);
    title2.classList.toggle("hide", false);
}
else {
    const hInt = setInterval(() => {
        let targetDate = new Date("12/31/2023");
        let nowDate = new Date();
        if (nowDate.getFullYear() == 2024) {
            title1.classList.toggle("hide", true);
            title2.classList.toggle("hide", false);
            clearInterval(hInt);
        }
        let intervalMS = targetDate.getTime() - nowDate.getTime();
        let interval = new Date();
        interval.setTime(intervalMS);
        console.log(interval);
        nDay.innerText = interval.getDate().toFixed();
        nHour.innerText = interval.getHours().toFixed();
        nMin.innerText = interval.getMinutes().toFixed();
        nSecond.innerText = interval.getSeconds().toFixed();
    }, 500);
}
