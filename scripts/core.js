var currentDate = new Date();
var year = currentDate.getFullYear();

var yearText = new String(year)
copy_text = "© Copyright " + yearText;

document.getElementById("footer").innerHTML = "Developed by: Dylan Damiano and <a href=\"team.html\">Team <\a> <br>" + copy_text;

hidden = false

function hide_show() {
    if (hidden == false) {
        console.log("Hiding!");
        hidden = true;

        document.getElementById("nav").style.display = "none";
    } else if (hidden == true) {
        console.log("Showing!");
        hidden = false;

        document.getElementById("nav").style.display = "block";
    }
}

var show_menu = document.getElementById("show");
show_menu.addEventListener("click", hide_show)