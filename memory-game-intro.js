//let siderBarToggle = document.querySelector('.start');
var sideBar = document.querySelector(".side-bar");
//var darkBtn = document.querySelector(".dark-btn");
var darkBtn = document.getElementById("dark-btn");

function sideBarToggle() {
    sideBar.classList.toggle("side-bar-height");
}

// function darkBtnToggle() {
//     darkBtn.classList.toggle("space-2-height")
// }

darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");


    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }
    else { 
         localStorage.setItem("theme", "light")
    }
}


if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}

else {
    localStorage.setItem("theme", "light");
}
