function indexeventlist() {
    document.getElementById("logbutton").addEventListener("click", logincheck);
    document.getElementById("logout").addEventListener("click", loggedout);
    document.getElementById("okbutton").addEventListener("click", search);
}

function regeventlist() {
    document.getElementById("regbut").addEventListener("click", register);
}

function register() {
    /* Deze functie wordt aangeroepen als iemand op de register knop drukt */
    var succes = 1; //succes determines whter the form was filled correctly and thus whether the registration can be fulfilled

    var regname = document.getElementById("inputname").value;
    var regage = document.getElementById("inputage").value;
    var regadres = document.getElementById("inputadres").value;
    var regcountry = document.getElementById("inputcountry").value;
    var regemail = document.getElementById("inputemail").value;
    var regusername = document.getElementById("inputusername").value;
    var regpas1 = document.getElementById("inputpas1").value;
    var regpas2 = document.getElementById("inputpas2").value;
    var regcredit = document.getElementById("inputcredit").value;
    var checkbox = document.getElementById("termscheck");


    if (checkbox.checked === false) {
        window.alert("You have not yet accepted our terms of service.");
        succes = 0;
    }

    /* checks wheter the two passwords are the same*/
    if (regpas1 !== regpas2) {
        window.alert("Passwords do not match try again");
        document.getElementById("inputpas1").value = "";
        document.getElementById("inputpas2").value = "";
        succes = 0;
    }

    //checks credit card validity or at least the validity of its format
    if (isNaN(regcredit)) {
        window.alert("This is not a valid creditcard number");
        succes = 0;
    }
    if (regcredit.length !== 16) {
        window.alert("This is not a valid creditcard number");
        succes = 0;
    }

    /* Checks wheter all inputfields are filled in*/
    var totaluser = [regname, regage, regadres, regcountry, regemail, regusername, regpas1, regpas2, regcredit];
    var L = totaluser.length;
    for (var u = 0; u < L; u++) {
        if (totaluser[u].toString() === "")
        {
            window.alert("You have not completely filled out the form, Please make sure you have filled in every field");
            u = L;
            succes = 0;
        }
    }
    //when everything has gone right succes is still 1 and the registration is ready to complete.
    if (succes === 1) {
        window.alert("You have been sucessfully registered");
        window.location.assign("index.html");
    }
}

function search() {
    /* Deze functie wordt aangeroepen als iemand op de zoekknop naast de zoekbar drukt*/
    var searchterm = document.getElementById("searchbar").value;
    window.alert("you have searched for: " + searchterm);
}

function logincheck() {
    var inputname = document.getElementById("input1").value;
    var inputpas = document.getElementById("input2").value;
    // hier moet er gecheckt worden of inlogegevens al bekend zijn bij de server zoja:
    loggedin();
    //zonee:
    //window.alert("Logincodes are not correct")
}

function loggedin() {
    /* saving the login data */
    var inputname = document.getElementById("input1").value;
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