let root = document.querySelector(":root");
let flipbtn = document.getElementById("flipbtn");
let color = document.getElementById("colortxt");
let allElements = document.querySelectorAll("*");
let body = document.querySelector("body");

let rootstyle = getComputedStyle(root);

let black = rootstyle.getPropertyValue("--clr-dark");
let white = rootstyle.getPropertyValue("--clr-light");

flipbtn.addEventListener("click", () => {
    let redrange = Math.ceil(Math.random() * 255);
    let greenrange = Math.ceil(Math.random() * 255);
    let bluerange = Math.ceil(Math.random() * 255);
    let alpha = Math.floor(Math.random() * 100) / 100;

    let bgcolor = `rgba(${redrange},${greenrange},${bluerange},${alpha})`;
    color.innerText = bgcolor;
    body.style.background = bgcolor;


    let bgLuminance = (0.299 * redrange + 0.587 * greenrange + 0.114 * bluerange) / 255;
    let luminance = alpha * bgLuminance + (1 - alpha) * 1;

    if (luminance > 0.5) {
        allElements.forEach(element => {
            element.style.color = black;
        });
        flipbtn.style.border = `2px solid ${black}`;
    } else {

        allElements.forEach(element => {
            element.style.color = white;
        });
        flipbtn.style.border = `2px solid ${white}`;
    }
});
