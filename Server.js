const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

//Create a connection pool with the user details
const connectionPool = mysql.createPool({
    connectionLimit: 2,
    host: "localhost",
    user: "root",
    password: "",
    database: "recipe",
    debug: false
});

//Create express app and configure it with body-parser
const app = express();
app.use(bodyParser.json());



app.use(express.static('public'));
var sqlError;
function LoginCookPost(request, response) {
    //Output the data sent to the server
    let cooklogin = request.body; //capture cook object from client.js
    let cookLogin;
    console.log("Data received: " + JSON.stringify(cooklogin));

    //Performing query
    getCookLogin(cooklogin.name, cooklogin.pass).then(result => { //call getcook function with parameter name and pass written by user
        //Output reviews.
        cookLogin = (JSON.stringify(result));
        //Empty array
        if (cookLogin.length ===2) {
            response.send("invalid");
        } else {
            response.send("success");
        }

    }).catch(err => {//Handle the error
        console.error(JSON.stringify(err));
    });
    //Finish off the interaction.

}
function RegisterCookPost(request, response) {
    //Output the data sent to the server
    let RegisterCookPost = request.body; //capture new user details from client
    let register;
    console.log("Data received: " + JSON.stringify(RegisterCookPost));

    //Performing query
    PerformAddQuery(RegisterCookPost.name, RegisterCookPost.address,RegisterCookPost.telephoneNo,RegisterCookPost.pass).then(result => { 
        //Output reviews.
        register = (JSON.stringify(result));
        console.log(register);
        //Empty array
        if (cookLogin.length ===2) {
            response.send("invalid");
        } else {
            response.send("success");
        }

    }).catch(err => {//Handle the error
        console.error(JSON.stringify(err));
    });
    //Finish off the interaction.

}
async function PerformAddQuery(username,address,telephone_no,password) {
    //Build query
    
    let sql = "INSERT INTO user_details (username, Fullname, Telephone_No, ClientAddress) VALUES" +
    "('" + username + "','" + address + "','" + telephone_no + "','" + address+ "');"; 
    
    //Execute query and output results
connectionPool.query(sql, (err, result) => {
    if (err){//Check for errors
        sqlError=true;
        console.error("Error executing query: " + JSON.stringify(err));
    }
    else{
        sqlError=false;
        console.log(JSON.stringify(result));
    }
});

    if (sqlError==false) {
        console.log("here")
        
    let sql = "INSERT INTO user_account (Username, User_Password) VALUES" +
    "('" + username + "','"  + password+ "');"; 
    function RegisterCookPost(request, response) {
    //Output the data sent to the server
    let RegisterCookPost = request.body; //capture new user details from client
    let register;
    console.log("Data received: " + JSON.stringify(RegisterCookPost));

    //Performing query
    PerformAddQuery(RegisterCookPost.name, RegisterCookPost.address,RegisterCookPost.telephoneNo,RegisterCookPost.pass).then(result => { 
        //Output reviews.
        register = (JSON.stringify(result));
        console.log(register);
        //Empty array
        if (cookLogin.length ===2) {
            response.send("invalid");
        } else {
            response.send("success");
        }

    }).catch(err => {//Handle the error
        console.error(JSON.stringify(err));
    });
    //Finish off the interaction.

}


    //Wrap the execution of the query in a promise
    return new Promise((resolve, reject) => {
        connectionPool.query(sql, (err, result) => {
            if (err) {//Check for errors
                
                reject("Error executing query: " + JSON.stringify(err));
            } else {//Resolve promise with results
               
                console.log(JSON.stringify(result));
            }
        });
    });
    }
}
function newDescriptionPost(request, response) {
    //Output the data sent to the server
    let newrecipe = request.body; //capture new user details from client
    let register;
    console.log("Data received: " + JSON.stringify(newrecipe));
    console.log("here");

    //Performing query
    PerformAddrecipe(newrecipe.name, newrecipe.Description,newrecipe.title).then(result => { 
        //Output reviews.
        register = (JSON.stringify(result));
        console.log(register);
        //Empty array
        if (cookLogin.length ===2) {
            response.send("invalid");
        } else {
            response.send("success");
        }

    }).catch(err => {//Handle the error
        console.error(JSON.stringify(err));
    });
    //Finish off the interaction.

}
async function PerformAddrecipe(username,description,title) {
    //Build query
    let img="";
    let sql = "INSERT INTO user_recipe (Recipe_Description,Recipe_title,Username) VALUES" +
    "('"+description + "','"  + title+ "','"  + username+ "');"; 

    console.log(sql)
    //Wrap the execution of the query in a promise
    return new Promise((resolve, reject) => {
        connectionPool.query(sql, (err, result) => {
            if (err) {//Check for errors
                reject("Error executing query: " + JSON.stringify(err));
            } else {//Resolve promise with results
                resolve(result);
            }
        });
    });
}
function recipePost(request, response) {
    //Output the data sent to the server
    let recipe = request.body;
    console.log("Data received: " + JSON.stringify(recipe));

    //Performing query
    getrecipe(recipe.username).then(result => { // parsing username of signed cook to get function
        //Output reviews.
        SpecificRecipe = (JSON.stringify(result));// putting all recipe of particular cook to a var
        response.send(SpecificRecipe);

    }).catch(err => {//Handle the error
        console.error(JSON.stringify(err));
    });
    //Finish off the interaction.

}
async function getrecipe(username) {
    //Build query
    let sql = "SELECT * FROM user_recipe WHERE username=" + "'" + username + "';";

    //Wrap the execution of the query in a promise
    return new Promise((resolve, reject) => {
        connectionPool.query(sql, (err, result) => {
            if (err) {//Check for errors
                reject("Error executing query: " + JSON.stringify(err));
            } else {//Resolve promise with results
                resolve(result);
            }
        });
    });
}
function getRequestAllRecipe(request, response) {

    //Split the path of the request into its components
    let pathArray = request.url.split("/");

    //Get the last part of the path
    let pathEnd = pathArray[pathArray.length - 1];

    //If path ends with 'users' we return all users
    if (pathEnd === 'DisplayAllRecipe') {
        getResultAllRecipe().then(result => {
            
            recipeArray = JSON.stringify(result);
            //Do something else
            response.send(recipeArray);


        }).catch(err => {//Handle the error
            console.error(JSON.stringify(err));
        });


    }
}
function getResultAllRecipe() {
    //Build query
    let sql = "SELECT * FROM user_recipe;";

    //Wrap the execution of the query in a promise
    return new Promise((resolve, reject) => {
        connectionPool.query(sql, (err, result) => {
            if (err) {//Check for errors
                reject("Error executing query: " + JSON.stringify(err));
            } else {//Resolve promise with results
                resolve(result);
            }
        });
    });
}


async function getCookLogin(username, password) {
    //Build query
    let sql = "SELECT * FROM user_account WHERE Username=" + "'" + username + "' AND User_Password='" + password + "';";

    //Wrap the execution of the query in a promise
    return new Promise((resolve, reject) => {
        connectionPool.query(sql, (err, result) => {
            if (err) {//Check for errors
                reject("Error executing query: " + JSON.stringify(err));
            } else {//Resolve promise with results
                resolve(result);
            }
        });
    });
}




app.post('/loginCook', LoginCookPost);//Performs login cooker
app.post('/registerCooker', RegisterCookPost); //perform register cooker
app.post('/SpecificRecipe', recipePost);
app.get('/DisplayAllRecipe',getRequestAllRecipe);

app.post('/addnewDescription',newDescriptionPost);
app.listen(8080);