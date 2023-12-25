const nDay: HTMLParagraphElement = document.querySelector(".n-day")!;
const nHour: HTMLParagraphElement = document.querySelector(".n-hour")!;
const nMin: HTMLParagraphElement = document.querySelector(".n-min")!;
const nSecond: HTMLParagraphElement = document.querySelector(".n-sec")!;
const nMs: HTMLParagraphElement = document.querySelector(".n-ms")!;
const title1 = document.querySelector(".title.first") as HTMLDivElement;
const title2 = document.querySelector(".title.second") as HTMLDivElement;

const dCheck: Date = new Date();

if (dCheck.getFullYear() == 2024) {
  title1.classList.toggle("hide", true);
  title2.classList.toggle("hide", false);
} else {
  const hInt = setInterval(() => {
    let targetDate: Date = new Date("12/31/2023");
    let nowDate: Date = new Date();
    if (nowDate.getFullYear() == 2024) {
      title1.classList.toggle("hide", true);
      title2.classList.toggle("hide", false);
      clearInterval(hInt);
    }
    let intervalMS: number = targetDate.getTime() - nowDate.getTime();
    let interval: Date = new Date();
    interval.setTime(intervalMS);
    console.log(interval);
    nDay.innerText = interval.getDate().toFixed();
    nHour.innerText = interval.getHours().toFixed();
    nMin.innerText = interval.getMinutes().toFixed();
    nSecond.innerText = interval.getSeconds().toFixed();
  }, 500);
}
