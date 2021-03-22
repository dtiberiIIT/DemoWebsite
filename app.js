console.log("JS Active");

function toggle_nav() {
    var navbar = document.getElementsByClassName("navbar");
    navbar = navbar[0];
    console.log(navbar);
    if(navbar.classList.contains("active_nav")) {
        navbar.classList.remove("active_nav")
    }
    else {
        navbar.classList.add("active_nav")
    }
}
