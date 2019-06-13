const time = document.getElementById('time'),
    greeting = document.getElementById('greeting');


// Clock
/**
 * Gets hour, min, sec and updates every second.
 * Min and Sec doesnt add 0 if the number as 1 character
 */
function showClock() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    time.innerHTML = `${hour}:${addZeros(min)}:${addZeros(sec)}`;

    setTimeout(showClock, 1000);
}

/**
 * Adds zeros to min and sec
 * @param {number} num Receives min and sec from showClock()
 * @returns {number} 0+min, 0+sec
 */
function addZeros(num) {
    return (parseInt(num, 10) < 10 ? '0' : '') + num;
}

/**
 * Changes the background picture and greeting according to the time of day
 */
function backgroundImg() {
    let today = new Date(),
        hour = today.getHours();
    const image = document.body.style.backgroundImage = "url(https://picsum.photos/1920/1080)";

    if (hour < 12) {
        // document.body.style.backgroundImage = "url(https://picsum.photos/1920/1080)";
        image;
        greeting.textContent = "Bom dia Carlos";
    } else if (hour < 19) {
        // document.body.style.backgroundImage = "url(https://picsum.photos/1920/1080)";
        image;
        greeting.textContent = "Boa tarde Carlos";
    } else {
        // document.body.style.backgroundImage = "url(https://picsum.photos/1920/1080)";
        image;
        greeting.textContent = "Boa noite Carlos";
    }
}

showClock();
backgroundImg();