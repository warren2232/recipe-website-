//Points to a div element where user combo will be inserted.
let userDiv;
let addUserResultDiv;
let SpecificRecipePage=document.getElementById("SpecificRecipePage");

//Set up page when window has loaded
window.onload = init;

//Get pointers to parts of the DOM after the page has loaded.
function init() {
    OnlyCarousel= document.getElementById("MyHome");
    SpecificRecipePage=document.getElementById("SpecificRecipePage");
    loginPage=document.getElementById("login");
    
    displayAllRecipe=document.getElementById("AllRecipe");
    CheckSession();

}

function displayMyHistory(){ // display
    OnlyCarousel.style.display = "block";
    SpecificRecipePage.style.display="block";
    displayAllRecipe.style.display="none";
}
function displayHomePage(){ //display carousel
    OnlyCarousel.style.display = "block";
    SpecificRecipePage.style.display="none";
    displayAllRecipe.style.display="none";

}
function displayAll(){ // display all recipe for specific user
    OnlyCarousel.style.display = "block";
    SpecificRecipePage.style.display="none";
    displayAllRecipe.style.display="block";
}


function loginUser() { //loginUser() function is triggered when the user clicks on login
    //Set up XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    //Extract user data
    let usrName = document.getElementById("CookUsername").value;
    let usrPass = document.getElementById("CookPassword").value;

    if (usrName == "" || usrPass == "") {
        alert("Fill up all fields");
        return;
    }

    //Create object with user data
    let cook = {
        name: usrName,
        pass: usrPass
    };

    //Set up function that is called when reply received from server
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            if (xhttp.responseText == "success") {

                localStorage.USERNAME = usrName;//Store name
                alert("SUCESSFULLY LOGGED IN");
                CheckSession();

            } else {
                alert("Incorrect username/password");

            }
        } else {
        }
    };

    //Send new user data to server
    xhttp.open("POST", "/loginCook", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(cook));
}

function registerCooker() { //registerCooker() function is triggered when the user clicks on register
    //Set up XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    //Extract user data
    let usrName = document.getElementById("username_register").value;
    let usrAddress = document.getElementById("CookAddress").value;
    let usrTelephoneNo = document.getElementById("TelephoneNo").value;
    let usrPass = document.getElementById("user_Password").value;

    //Create object with user data
    let registerCooker = {
        name: usrName,
        address: usrAddress,
        telephoneNo: usrTelephoneNo,
        pass: usrPass

    };

    console.log(registerCooker);
    if (usrName == "" || usrAddress == "" || usrTelephoneNo == "" || usrPass == "") {
        console.log(usrName);
        console.log(usrAddress);
        alert("Fill up all fields");
        return;
    }

    //Set up function that is called when reply received from server
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            if (xhttp.responseText == "success") {


                alert("Sucessfully added !");


            } else {
                alert("error");

            }
        } else {
        }
    };

    //Send new user data to server
    xhttp.open("POST", "/registerCooker", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(registerCooker)); // send new user details to server
}

function addNewRecipe() { //addnewrecipe() function is triggered when the user clicks on post
    //Set up XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    //Extract user data
    let key = localStorage.key(0); // only one username in localstorage
    let username = localStorage.getItem(key); // put signed in username in var
    console.log(username);
    let newrecipe = document.getElementById("exampleFormControlTextarea1").value;
    let newtitle = document.getElementById("title").value;

    //Create object with user data
    let description = {
        name:username,
        Description: newrecipe,
        title: newtitle


    };

    console.log(description);
    if (newrecipe == "") {
        console.log(newrecipe);
        
        alert("Write recipe first!");
        return;
    }

    //Set up function that is called when reply received from server
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            if (xhttp.responseText == "success") {


                alert("Sucessfully added !");


            } else {
                alert("error");

            }
        } else {
        }
    };

    //Send new user data to server
    xhttp.open("POST", "/addnewDescription", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(description)); // send new recipe details to server
}


function SendUsername() {
    SIGNIN=false;
    if (localStorage.USERNAME != undefined) {
        SIGNIN = true;
        let key = localStorage.key(0); // only one username in localstorage
        let username = localStorage.getItem(key); // put signed in username in var
        console.log(username);
        getSpecificRecipe(username);

    }else{
        alert("user not signed in");
    } 
    
}

function getSpecificRecipe(name) {
    displayMyHistory()


    //Set up XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    let recipe = {
        username: name
    };
    xhttp.onreadystatechange = () => {//Called when data returns from server
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //Convert JSON to a JavaScript object
            let usrArr = JSON.parse(xhttp.responseText);
            console.log(usrArr);

            //Return if no users
          /*   if (usrArr.length === 0)
                return; */

            //Build string with user data

            let htmlStr;
            htmlStr += (' <div class="wrapperhistory">');


                htmlStr += ('<table class="table">');
                htmlStr += (' <thead class="thead-light">');
                htmlStr += ('   <tr>');
                htmlStr += ('      <th scope="col">Dish</th>');
                htmlStr += ('     <th scope="col">Recipe</th>');
                
            for (let key in usrArr) { //loops relative to how many recipe there are
                

                htmlStr += ('  </tr>');
                htmlStr += ('   </thead>');
                htmlStr += ('   <tbody>');
                htmlStr += ('    <tr>');
                htmlStr += ('     <th scope="row"> '+ key +". " + usrArr[key].Recipe_title+' </th>');
                htmlStr += ('      <td>"'+ usrArr[key].Recipe_Description+'"');
            }
            htmlStr += ('   </tr>');
                htmlStr += ('  </tbody>');
                htmlStr += (' </table>');
                htmlStr += ('<div class="form-group row">');
                htmlStr += ('<label for="staticEmail" class="col-sm-2 col-form-label">Title</label>');
                htmlStr += (' <div class="col-sm-10">');
                htmlStr += ('   <input type="text" class="form-control-plaintext" id="title" placeholder=" Enter title">');
                htmlStr += (' </div>');
                htmlStr += ('  </div>');

            htmlStr += (' <div class="form-group">');
            htmlStr += ('    <label for="exampleFormControlTextarea1">Enter new recipe</label>');
            htmlStr += ('   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>');
            
            

            htmlStr += ('  </div>');
            htmlStr += (' <button onclick="addNewRecipe()" type="button" class="btn btn-outline-secondary" style="margin-left: 1440px;">Post</button>');
            htmlStr += ('  <div class="input-group">');
            htmlStr += ('    <div class="input-group-prepend">');

            htmlStr += ('   </div>');
            htmlStr += ('   <div class="custom-file">');
            htmlStr += ('     <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">');

            htmlStr += ('      </div>');
            htmlStr += ('    </div>');

            htmlStr += ('  </div>');
          
            SpecificRecipePage.innerHTML = htmlStr;
        }
    };

    //Request data from all users
    xhttp.open("POST", "/SpecificRecipe", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(recipe));
}

function CheckSession() { //function that checks if someone is logged in
    let SIGNIN = false;
    if (localStorage.USERNAME != undefined) {
        SIGNIN = true;
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "block";
        document.getElementById("MyHistory").style.display = "block";
        document.getElementById("register").style.display = "none";
        document.getElementById("allrecipe").style.display = "block";
        

    } else {
        document.getElementById("login").style.display = "block";
        document.getElementById("logout").style.display = "none";
        document.getElementById("MyHistory").style.display = "none";
        document.getElementById("register").style.display = "block";
        document.getElementById("allrecipe").style.display = "none";

    }

}
function displayAllRecipeFunc(usrArr) {

    //Return if tutors
    if (usrArr.length === 0)
        return;


    //Build string with user data
    let htmlStr;
      htmlStr += ('<div class="wrapperhistory">');


        htmlStr += ('<table class="table">');
        htmlStr += ('<thead class="thead-light">');
        htmlStr += ('<tr>');
        htmlStr += ('  <th scope="col">Dish</th>');
        htmlStr += (' <th scope="col">Recipe</th>');
        htmlStr += ('   </tr>');
        htmlStr += (' </thead>');
        htmlStr += (' <tbody>');
        htmlStr += ('   <h1> <i class="fas fa-book-open"></i>    ALL RECIPES</h1>');
    for (let key in usrArr) {

        
        htmlStr += ('    <tr>');
        htmlStr += ('        <th scope="row">'+ key +". " + usrArr[key].Recipe_title+' </th>');
        htmlStr += ('        <td>' + usrArr[key].Recipe_Description + '');

        htmlStr += ('           .</td>');


        htmlStr += ('   </tr>');
        
        
    }
    //Add users to page.
    htmlStr += ('  </tbody>');
    htmlStr += (' </table>');
    htmlStr += ('</div>');
   
    displayAllRecipe.innerHTML = htmlStr;

}
function GetAllRecipe() {

    //Set up XMLHttpRequest
    displayAll()
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {//Called when data returns from server
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //Convert JSON to a JavaScript object
            usrArr = JSON.parse(xhttp.responseText);
            console.log(usrArr);
            displayAllRecipeFunc(usrArr);
        }
    };

    //Request data from all users
    xhttp.open("GET", "/DisplayAllRecipe", true);
    xhttp.send();
}



function Logout() {
    localStorage.clear();
    displayHomePage()
    alert("Successfully logged out");
    CheckSession();

}


