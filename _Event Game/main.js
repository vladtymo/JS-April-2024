// -=-=-=-=-=-=-=- Events -=-=-=-=-=-=-=-

// ----------- add event listener to many items
var circles = document.querySelectorAll('.container .circle');

circles.forEach((i) => {
    i.addEventListener("click", function (event) {
        // change element color
        event.target.classList.toggle('super');
    });
});
