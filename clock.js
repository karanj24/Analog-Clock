setInterval(() => {
    d = new Date;
    hr = d.getHours();
    mnt = d.getMinutes();
    sec = d.getSeconds();
    hrot = 30*hr + mnt/2;
    mrot = 6*mnt;
    srot = 6*sec;

    hour.style.transform = `rotate(${hrot}deg)`;
    minute.style.transform = `rotate(${mrot}deg)`;
    second.style.transform = `rotate(${srot}deg)`;
}, 1000);