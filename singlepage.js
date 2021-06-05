// Page Change
var link = document.querySelectorAll('.link');
var page = document.querySelectorAll('.page');
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function(){
        for (let u = 0; u < page.length; u++) {
            page[u].style.zIndex = "0";
            page[u].style.opacity = "0";
            link[u].style.display = "block";        
        }
        link[i].style.display = "none";
        page[i].style.zIndex = "10";
        page[i].style.opacity = "1";
    })  
}


// Menu Burger
var burger = document.querySelector('.burger');
var containLinkBurger = document.querySelector('.contain-link-burger');
var containMain = document.querySelector('.contain-main');

var flag = 0;
burger.addEventListener('click', function(){
    if (flag == 0) {
        containLinkBurger.style.transform = "translateX(0em)";
        containMain.style.filter = "contrast(0.5)";
        flag = 1;
    }
    else if (flag == 1) {
        containLinkBurger.style.transform = "translateX(-999em)";
        containMain.style.filter = "";
        flag = 0;
    }   
})

var linkBurger = document.querySelectorAll('.link-burger');
for (let i = 0; i < linkBurger.length; i++) {
    linkBurger[i].addEventListener('click', function() {
        for (let u = 0; u < page.length; u++) {
            page[u].style.zIndex = "0";
            page[u].style.opacity = "0";
            linkBurger[u].style.display = "block";        
        }
        linkBurger[i].style.display = "none";
        page[i].style.zIndex = "10";
        page[i].style.opacity = "1";
    })
    
}
