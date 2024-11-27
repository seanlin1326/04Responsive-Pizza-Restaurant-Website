//Scroll navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop>20)
    {
        nav.classList.add("scroll-on")
    }
    else
    {
        nav.classList.remove("scroll-on")
    }
}
// nav hide
let navBars = document.querySelectorAll('.nav-link');
let navCollapese = document.querySelector('.collapse.navbar-collapse');
navBars.forEach(function(e){
    e.addEventListener("click",function(){
        navCollapese.classList.remove("show");
    })
})