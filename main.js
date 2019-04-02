function indexEventList() {
    document.getElementById("logbutton").addEventListener("click", loginCheck);
    document.getElementById("logout").addEventListener("click", loggedOut);
    document.getElementById("okbutton").addEventListener("click", search);
     }

function test() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        //checken of de aanvraag gelukt is
        if (this.readyState == 4 && this.status == 200)
        {
            window.alert("ja da gaat goed")
            printBooks(this);

        }
        else
        {
            window.alert("gaat niet helemaal goed, status: " + this.status + " en readystate: " + this.readyState);
        }
    };
    //deze url klopt niet maar geeft wel een 200state terug
    //req.open("GET", "https://secure.feedbackfruits.com/#groups/96457/contents/462176", true);
    req.open("GET", "group40@science-vs166/myapp/myapp", true);
    req.send();
}

function printBooks(file) {
    var fileDoc = file.responseXML;
    window.alert(fileDoc);
}

function regEventList() {
    document.getElementById("regbut").addEventListener("click",
        function(event){
            event.preventDefault();
            if(confirm("Are you sure?")){
                register();
            }
        });
}

function register() {
    /* Deze functie wordt aangeroepen als iemand op de register knop drukt */
    var succes = 1; //succes determines whter the form was filled correctly and thus whether the registration can be fulfilled

    var regName = document.getElementById("inputname").value;
    var regAge = document.getElementById("inputage").value;
    var regAdres = document.getElementById("inputadres").value;
    var regCountry = document.getElementById("inputcountry").value;
    var regEmail = document.getElementById("inputemail").value;
    var regPas1 = document.getElementById("inputpas1").value;
    var regPas2 = document.getElementById("inputpas2").value;
    var regCredit = document.getElementById("inputcredit").value;
    var checkbox = document.getElementById("termscheck");


    if (checkbox.checked === false) {
        window.alert("You have not yet accepted our terms of service.");
        succes = 0;
    }

    //checks whether passwords are viable
    var hasNumb = 0;
    var hasWhite = 0;
    var pasLength = regPas1.length;

    //for loop cycles through the given password
    for (let u = 0; u < pasLength; u++) {
    if (regPas1[u].match(/[0-9]/)){
        hasNumb = 1;
    }
    if (regPas1[u].match(/\s/g)){
        hasWhite = 1;
    }
    }
    if (hasNumb === 0) {
        window.alert("Password must have at least one number");
        succes = 0;
    }
    if (hasWhite === 1) {
        window.alert("Password can not contain a white-space");
        succes = 0;
    }
    if (regPas1.length <= 6) {
        window.alert("Password must consist of a minimum of 6 characters");
        succes = 0;
    }

    /* checks whether the two passwords are the same*/
    if (regPas1 !== regPas2) {
        window.alert("Passwords do not match try again");
        document.getElementById("inputpas1").value = "";
        document.getElementById("inputpas2").value = "";
        succes = 0;
    }

    //checks credit card validity or at least the validity of its format
    if (isNaN(regCredit)) {
        window.alert("This is not a valid creditcard number");
        succes = 0;
    }
    if (regCredit.length !== 16) {
        window.alert("This is not a valid creditcard number");
        succes = 0;
    }

    /* Checks whether all input fields are filled in*/
    var totalUser = [regName, regAge, regAdres, regCountry, regEmail, regPas1, regPas2, regCredit];
    var L = totalUser.length;
    for (let u = 0; u < L; u++) {
        if (totalUser[u].toString() === "")
        {
            window.alert("You have not completely filled out the form, Please make sure you have filled in every field");
            u = L;
            succes = 0;
        }
    }
    //when everything has gone right succes is still 1 and the registration is ready to complete.
    if (succes === 1) {
        window.alert("You have been successfully registered");
        window.location.assign("index.html");
    }
}

function search() {
    /* Deze functie wordt aangeroepen als iemand op de zoekknop naast de zoekbar drukt*/
    var searchTerm = document.getElementById("searchbar").value;
    window.alert("you have searched for: " + searchTerm);
}

function loginCheck() {
    var inputName = document.getElementById("input1").value;
    var inputPas = document.getElementById("input2").value;
    // hier moet er gecheckt worden of inlogegevens al bekend zijn bij de server zoja:
    loggedIn();
    //zonee:
    //window.alert("Logincodes are not correct")
}

function loggedIn() {
    /* saving the login data */
    var inputName = document.getElementById("input1").value;
    /* giving feedback about the logging in */
    window.alert("You logged in as: " + inputName);
    /* change the page accordingly */
    document.getElementById("loggedin1").textContent += inputName;
    document.getElementById("username1").textContent += inputName;
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

function loggedOut() {
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
