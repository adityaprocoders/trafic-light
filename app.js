  
const red = document.getElementById("red");
const amber = document.getElementById("amber");
const green = document.getElementById("green");

 
function setLight(light) {
    red.classList.remove("on");
    amber.classList.remove("on");
    green.classList.remove("on");

    if (light === "red") red.classList.add("on");
    if (light === "amber") amber.classList.add("on");
    if (light === "green") green.classList.add("on");
}

 
function startTraffic() {
    setLight("red");

    setTimeout(() => {
        setLight("amber");
    }, 5000);

    setTimeout(() => {
        setLight("green");
    }, 8000);

    
    setInterval(() => {
        setLight("red");

        setTimeout(() => setLight("amber"), 5000);
        setTimeout(() => setLight("green"), 8000);

    }, 6000);
}

startTraffic();
