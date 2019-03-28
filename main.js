function eventlist() {
    document.getElementById("logbutton").addEventListener("click", loggedin);
    document.getElementById("logout").addEventListener("click", loggedout);
    document.getElementById("okbutton").addEventListener("click", search);
    document.getElementById("regbut").addEventListener("click", register);
}

function register() {
    window.alert();
    /* Deze functie wordt aangeroepen als iemand op de register knop drukt */
    var regname = document.getElementById("inputname").value;
    var regage = document.getElementById("inputage").value;
    var regadres = document.getElementById("inputadres").value;
    var regcountry = document.getElementById("inputcountry").value;
    var regemail = document.getElementById("regemail").value;
    var regusername = document.getElementById("inputusername").value;
    var regpas1 = document.getElementById("inputpas1").value;
    var regpas2 = document.getElementById("inputpas2").value;

    if (regpas1 !== regpas2) {
        window.alert("Passwords do not match try again");
        document.getElementById("inputpas1").value = "";
        document.getElementById("inputpas2").value = "";
    }

    var totaluser = [regname, regage, regadres, regcountry, regemail, regusername, regpas1, regpas2]
    var L = totaluser.length;
    
    for (var u = 0; u < L; u++) {
        if (totaluser[u].toString() == "")
        {
            window.alert("You have not completely filled out the form, Please make sure you have filled in " + totaluser[u])
        }
    }



}

function search() {
    /* Deze functie wordt aangeroepen als iemand op de zoekknop naast de zoekbar drukt*/
    var searchterm = document.getElementById("searchbar").value;
    window.alert("you have searched for: " + searchterm);
}

function loggedin() {
    /* saving the login data */
    var inputname = document.getElementById("input1").value;
    var inputpas = document.getElementById("input2").value;
    /* giving feedback about the logging in */
    window.alert("You logged in as: " + inputname);
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