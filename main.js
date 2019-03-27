function eventlist() {
    document.getElementById("logbutton").addEventListener("click", loggedin);
    document.getElementById("logout").addEventListener("click", loggedout);
}

function loggedin() {
    /* saving the login data */
    var inputname = document.getElementById("input1").value;
    var inputpas = document.getElementById("input2").value;
    /* giving feedback about the logging in */
    window.alert("You logged in as " + inputname);
    /* change the page accordingly */
    document.getElementById("loggedin1").textContent += inputname;
    document.getElementById("username1").textContent += inputname;
    document.getElementById("input1").style.display = "none";
    document.getElementById("input2").style.display = "none";
    document.getElementById("logbutton").style.display = "none";
    document.getElementById("toregister").style.display = "none";
    document.getElementById("loggedin1").style.display = "block";
    document.getElementById("loggedin2").style.display = "block";
    document.getElementById("loggedin3").style.display = "block";
    document.getElementById("loggedin4").style.display = "block";
    document.getElementById("loggedin5").style.display = "block";
    document.getElementById("loggedin6").style.display = "block";
}

function loggedout() {
    window.alert("You logged out");
    document.getElementById("input1").style.display = "block";
    document.getElementById("input2").style.display = "block";
    document.getElementById("logbutton").style.display = "block";
    document.getElementById("toregister").style.display = "block";
    document.getElementById("loggedin1").style.display = "none";
    document.getElementById("loggedin2").style.display = "none";
    document.getElementById("loggedin3").style.display = "none";
    document.getElementById("loggedin4").style.display = "none";
    document.getElementById("loggedin5").style.display = "none";
    document.getElementById("loggedin6").style.display = "none";
}