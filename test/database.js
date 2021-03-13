//Import the mysql module and create a connection pool with user details
const mysql = require('mysql');
const connectionPool = mysql.createPool({
    connectionLimit: 1,
    host: "localhost",
    user: "root",
    password: "",
    database: "recipe",
    debug: false
});


exports.getAllCook = (response) => {
    //Build query
    let sql = "SELECT *FROM user_account;";

    //Execute query 
    connectionPool.query(sql, (err, result) => {
        if (err){//Check for errors
            let errMsg = "{Error: " + err + "}";
            console.error(errMsg);
            response.status(400).json(errMsg);
        }
        else{//Return results in JSON format 
            //console.log(JSON.stringify(result));
            response.send(JSON.stringify(result))
        }
    });
};


//Adds a new recipe to database
exports.addDetails = (recipe_description, recipe_title, image_url, username,response) => {
    //Build query
    let sql = "INSERT INTO user_recipe (Recipe_Description,Recipe_title,image_url,Username) VALUES " +
        "('" + recipe_description + "','" + recipe_title + "','" + image_url + "','" + username + "');";

    console.log(sql);
    //Execute query
    connectionPool.query(sql, (err, result) => {
        if (err){//Check for errors
            let errMsg = "{Error: " + err + "}";
            console.error(errMsg);
            response.status(400).json(errMsg);
        }
        else{//Send back result
            response.send("{result: 'Cook added successfully'}");
        }
    });
};

describe('Access to DB', function(){
    describe('#fail', function(){
         it('should return -1 because wrong credentials', function(done){
             var connection = mysql.createConnection({
                 host: 'localhost',
                 user: 'root',
                 password: '',
                 database: 'recipe'
             });
             connection.connect(done);
         });
     })
 });