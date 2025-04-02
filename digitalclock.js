setInterval(function() {
    const dat = new Date();
    let hours = dat.getHours();
    let minutes = dat.getMinutes();
    let seconds = dat.getSeconds();

    // Print time in console, like 00 00 00 patterns
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    console.log(`${hours} ${minutes} ${seconds}`);

    // Get elements by class name (using [0] to access the first element)
    let hbox = document.querySelector(".boxhrs");
    let mbox = document.querySelector(".boxmins");
    let sbox = document.querySelector(".boxsecs");

    // Update the inner text of the elements,time starts
    if (hbox) hbox.innerText = hours;
    if (mbox) mbox.innerText = minutes;
    if (sbox) sbox.innerText = seconds;

},1000);
