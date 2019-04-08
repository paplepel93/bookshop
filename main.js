//Main.js is the javascript file that manages the responsive sides of the page. This is where the p[age will be changed on logging in
//and this is where the register info is processed.

function indexEventList() {
    document.getElementById("logbutton").addEventListener("click", loginCheck);
    document.getElementById("logout").addEventListener("click", loggedOut);
    document.getElementById("okbutton").addEventListener("click", test);
    document.getElementById("drop1").addEventListener("click", changedisplay);
    document.getElementById("drop2").addEventListener("click", changedisplay);
    document.getElementById("drop3").addEventListener("click", changedisplay);
    connect();
}

function test() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        //checken of de aanvraag gelukt is
        if (this.readyState == 4  && this.status == 200)
        {
            window.alert("ja da gaat goed");
            printBooks(this);
        }
        else
        {
            window.alert("status: " + this.status + " en readystate: " + this.readyState);
        }
    };
    req.open("GET", "http://webtech.science.uu.nl/group40/index.html", true);
    req.send();
}

function printBooks(){
    //where the requested data about the books from the server should have been displayed.
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

function changedisplay() {

}

function register() {
    /* Deze functie wordt aangeroepen als iemand op de register knop drukt */
    var succes = 1; //succes determines whter the form was filled correctly and thus whether the registration can be fulfilled
    var haserror = 0; //haserror checks whether an error has already occured so a user doesnt get multiplee error messages at the time

    //block of values that come from the inputfield
    var regName = document.getElementById("inputname").value;
    var regAge = document.getElementById("inputage").value;
    var regAdres = document.getElementById("inputadres").value;
    var regCountry = document.getElementById("inputcountry").value;
    var regEmail = document.getElementById("inputemail").value;
    var regPas1 = document.getElementById("inputpas1").value;
    var regPas2 = document.getElementById("inputpas2").value;
    var regCredit = document.getElementById("inputcredit").value;
    var checkbox = document.getElementById("termscheck");


    /* Checks whether all input fields are filled in*/
    var totalUser = [regName, regAge, regAdres, regCountry, regEmail, regPas1, regPas2, regCredit];
    var L = totalUser.length;
    for (let u = 0; u < L; u++) {
        if (totalUser[u].toString() === "") {
            if (haserror === 0) {
                window.alert("Something went wrong! are you sure you filled every field in correctly?");
                u = L;
                haserror = 1;
                succes = 0;
            }
        }
    }
        //checks whether a space has been used in the name field implicating that a first and last name has been given.
        var firstandlast = 0;
        for (let u = 0; u < regName.length; u++) {
            if (regName[u] === " ") {
                firstandlast = 1;
            }
        }
        if (firstandlast === 0) {
            succes = 0;
            window.alert("Please fil in a first and last name");
        }

        //checks whether passwords are viable
        var hasNumb = 0;
        var hasWhite = 0;
        var hasUpper = 0;

        //for loop cycles through the given password
        for (let u = 0; u < regPas1.length; u++) {
            if (regPas1[u].match(/[0-9]/)) {
                hasNumb = 1;
            }
            if (regPas1[u].match(/\s/g)) {
                hasWhite = 1;
            }
            if (regPas1[u] === regPas1[u].toUpperCase())
            {
                hasUpper = 1;
            }
        }
        //end of forloop now we check if numbers or whitespaces have been used.
        if (hasNumb === 0) {
            if (haserror === 0) {
                window.alert("Please fill in a valid password");
                document.getElementById("passerr").style.display = "block";
                haserror = 1;
            }
            succes = 0;
        }
        if (hasWhite === 1) {
            if (haserror === 0) {
                window.alert("Please fill in a valid password");
                document.getElementById("passerr").style.display = "block";
                haserror = 1;
            }
            succes = 0;
        }
        if ((hasUpper === 0)) {
            if (haserror === 0) {
                window.alert("Please fill in a valid password");
                document.getElementById("passerr").style.display = "block";
                haserror = 1;
            }
            succes = 0;
        }

        //password must be at least 6 char
        if (regPas1.length <= 6) {
            if (haserror === 0) {
                window.alert("Please fill in a valid password");
                document.getElementById("passerr").style.display = "block";
                haserror = 1;
            }
            succes = 0;
        }

        /* checks whether the two passwords are the same*/
        if (regPas1 !== regPas2) {
            if (haserror === 0) {
                window.alert("Passwords do not match try again");
                haserror = 1;
            }
            document.getElementById("inputpas1").value = "";
            document.getElementById("inputpas2").value = "";
            succes = 0;
        }

        //checks credit card validity or at least the validity of its format
        if (isNaN(regCredit)) {
            if (haserror === 0) {
                window.alert("Please fill in a valid creditcard number");
                document.getElementById("crederr").style.display = "block";
                haserror = 1;
            }
            succes = 0;
        }
        if (regCredit.length !== 16) {
            if (haserror === 0) {
                window.alert("Please fill in a valid creditcard number");
                document.getElementById("crederr").style.display = "block";
                haserror = 1;
            }
            succes = 0;
        }
        //checks whether checkbox has been checked
        if (checkbox.checked === false) {
            if (haserror === 0) {
                window.alert("You have not yet accepted our terms of service.");
                haserror = 1;
            }
            succes = 0;
        }

        //when everything has gone right succes is still 1 and the registration is ready to complete.
        if (succes === 1) {
            window.alert("You have been successfully registered");
            window.location.assign("index.html");
        }
    }


function search() {
    var searchTerm = document.getElementById("searchbar").value;
    window.alert("you have searched for: " + searchTerm);
}

function loginCheck() {
    var inputName = document.getElementById("input1").value;
    var inputPas = document.getElementById("input2").value;
    // check whether logindata is know in the server, if true:
    loggedIn();
    //if false:
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
    document.getElementById("nrbought").value = "X"; //X should be number of items bought from his logindata
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

/*function showData() {
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('../test.db');

    let sql = 'SELECT DISTINCT name name FROM books ORDER BY name';

    db.all(sql, [], (err, rows) => {
        if(err){
            throw err;
        }
        rows.forEach((row) => {
            let contentHolder = document.getElementById('body2');
            let content = document.createTextNode(row.name);
            contentHolder.appendChild(content);
        })
    });
}*/

function connect() {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
      if(request.readyState === 4){
          console.log('ready state is 4');
          if(request.status === 200){
              console.log(request.response);
          }

          if(request.status === 404){
              console.log("File not found!");
          }
      }
    };

    request.open('GET', './test.txt', true);
    request.responseType = 'text';
    request.send();
}
