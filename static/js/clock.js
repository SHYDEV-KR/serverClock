const clock__hour = document.querySelector("#hour")
const clock__minute = document.querySelector("#minute")
const clock__second = document.querySelector("#second")

let hour = Number(clock__hour.innerText);
let minute = Number(clock__minute.innerText);
let second = Number(clock__second.innerText);

const updateClock = () => {
    if (second >= 0 && second <= 58) {
        second += 1;
    } else {
        second = 0;
        if (minute >= 0 && minute <= 58) {
            minute += 1;
        } else {
            minute = 0;
            if (hour >= 0 && hour <= 22) {
                hour += 1;
            } else {
                hour = 0;
            }
        } 
    }
    clock__second.innerText = String(second).padStart(2, '0');
    clock__minute.innerText = String(minute).padStart(2, '0');
    clock__hour.innerText = String(hour).padStart(2, '0');
}

const myInterval = () => {
    const now = String(new Date().getTime());
    const nowMilliseconds = Number(now.substring(now.length - 3));
    const nNextSleep = 1000 - nowMilliseconds;

    setTimeout(() => {
        updateClock();
        myInterval(); // 재귀호출
    }, nNextSleep);
};

myInterval();