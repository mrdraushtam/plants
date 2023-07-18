document.addEventListener("DOMContentLoaded", function() {
let elements = [...document.querySelectorAll('#home, #about, #service, .nav-list')].forEach(item => { 
    item.addEventListener('click', function() {
        document.querySelector("header").classList.remove("open");
    })
})
})

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
    })
});