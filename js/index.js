// Your code goes here
document.querySelector("header").addEventListener("mouseover", function() {
    document.querySelector("p").style.color = "green";
});
document.addEventListener("keydown", function() {
    console.log('keydown');
    document.querySelector(".content-destination p").style.color = "red";
});