let dot = document.querySelector('.dots');

setInterval(() => {
    dot.style.visibility = (dot.style.visibility === 'hidden' ? 'visible' : 'hidden');
}, 600);

let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

let sn = 0;
let mn = 0;

setInterval(() => {
    sn++
    if (sn < 10) {
        seconds.innerHTML = `0${sn}`
    } else if (sn === 60) {
        sn = 0
        mn++;
        if (mn < 10) {
            minutes.innerHTML = `0${mn}`
        } else {
            minutes.innerHTML = `${mn}`
        }
    } else if (sn >= 10) {
        seconds.innerHTML = sn;
    }
}, 1000)