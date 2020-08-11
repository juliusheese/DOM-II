document.querySelector("header").addEventListener("mouseover", function() {
    console.log("1");
    document.querySelector("p").style.color = "green";
});
document.addEventListener("keydown", function() {
    console.log("2");
    document.querySelector(".content-destination p").style.color = "red";
});
document.querySelector(".content-pick .destination").addEventListener("drag", function() {
    console.log("3");
    document.querySelector("footer p").style.color = "red";
    self.stopPropagation();
});
document.querySelector("footer").addEventListener("mousemove", function() {
    console.log("4");
    document.querySelector(".intro h2").style.color = "AliceBlue";
});
document.addEventListener("scroll", function() {
    console.log("5");
    document.querySelector(".text-content h2").style.color = "pink";
});
document.querySelector("img").addEventListener("load", function() {
    console.log("6");
    document.querySelector(".content-destination h2").style.color = "purple";
});
document.querySelector("header").addEventListener("dblclick", function() {
    console.log("7");
    document.querySelector("p").style.color = "coral";
});
document.querySelector(".destination h4").addEventListener("dragend", function() {
    console.log("8");
    document.querySelector("footer p").style.color = "brown";
});
document.querySelector(".content-pick .destination").addEventListener("dragstart", function() {
    console.log("9");
    document.querySelector("footer p").style.color = "azure";
});
document.querySelector("header").addEventListener("mouseleave", function() {
    console.log("10");
    document.querySelector("p").style.color = "aqua";
});
document.querySelector(".nav-link").addEventListener("click", function(event) {
    event.preventDefault();
}, false);
document.addEventListener("scroll", function() {
    event.stopPropagation();
    console.log("11");
    event.stopPropagation();

    document.querySelector(".nav-link").addEventListener("click", function(event) {

        event.stopPropagation();
        console.log("12");
        document.querySelector(".text-content h2").style.color = "pink";
        event.stopPropagation();
    });
}, false);