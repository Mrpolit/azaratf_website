const navbarButton = document.querySelector(".navBarButton");
const navbar = document.querySelector(".navBar");
const line = document.querySelectorAll(".line");
const halfline = document.querySelector(".halfline");
const navbarshadow = document.querySelector(".navbarshadow");

logoText();
setTimeout(introEnd,11000);

var flag = false;



function logoText(){
    let Screen = window.innerWidth;
    const text=document.querySelector('.text-logo');
    let font = Screen*(12.8/1920)+"rem";
    text.style.fontSize = font;
    text.innerHTML = text.textContent.replace(/\S/g, "<tspan class='space'>$&</tspan>");
    stroke();
}
function stroke(){
    const logo = document.querySelectorAll('.space');
    for (let index = 0; index < logo.length; index++) {
        logo[index].style.strokeDasharray = 700;
        logo[index].style.strokeDashoffset = 700;
        logo[index].style.animation = ` logoAnimation 4s ease forwards ${(index/10)*2+1}s `;
    }
}
function introEnd() {
    const intro = document.querySelector('.intro');
    intro.style.display = "none";
}
function navbarbtn(){
    let array = document.querySelectorAll(".itemsText");
    if(flag){
        navbar.style.animation = "fadeout 0.5s ease forwards ";
        setTimeout(navbarEnd, 1000);
        navbarButton.style.animation = "rotatezero 1s ease forwards";
        navbarshadow.style.boxShadow="0 0 0.5rem black";
        navbarshadow.style.backgroundColor = "white";
        line[0].style.width="1rem";
        line[0].style.backgroundColor = "var(--baseColor)";
        line[1].style.width="1rem";
        line[1].style.backgroundColor = "var(--baseColor)";
        halfline.style.width="1rem";
        halfline.style.backgroundColor = "var(--baseColor)";
        for (let index = 0; index < array.length; index++) {
            array[index].style.display="none";
        }
    }else{
        navbar.style.display = "flex";
        navbar.style.animation = "fadein 2s ease forwards ";
        navbarshadow.style.boxShadow="0 0 0 black";
        navbarshadow.style.backgroundColor = "transparent";
        navbarButton.style.animation = "rotateninty 1.5s ease forwards";
        line[0].style.width="3rem";
        line[0].style.backgroundColor = "white";
        line[1].style.width="2.5rem";
        line[1].style.backgroundColor = "white";
        halfline.style.width="1.5rem";
        halfline.style.backgroundColor = "white";
        for (let index = 0; index < array.length; index++) {
            array[index].style.display="flex";
        }
        navbaritems();
    }
    flag=!flag;
}
function navbaritems(){
    var textWrapper = document.querySelectorAll('.itemsText');;
    for (let index = 0; index < textWrapper.length; index++) {
        textWrapper[index].innerHTML = textWrapper[index].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }
    anime.timeline({loop: false})
    .add({
        targets: '.itemsText .letter',
        translateY: [-100,0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * i
    }).add({
        targets: '.itemsText',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
}
function navbarEnd(){
    if(!flag){
    navbar.style.display = "none";
    }
}