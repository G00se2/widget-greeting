let today = new Date();
let hrs = today.getHours();
let greet;

if (hrs < 12) {
    greet = 'Good Morning';
} else if (hrs >= 12 && hrs < 17) {
    greet = 'Good Afternoon';
} else {
    greet = 'Good Evening';
}

document.getElementById('widget').innerHTML = greet;
