//Database code that we are testing
let db = require('./database');

//Server code that we are testing
let server = require ('./web-application-sql');

//Set up Chai library 
let chai = require('chai');
let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

//Set up Chai for testing web service
let chaiHttp = require ('chai-http');
chai.use(chaiHttp);

//Import the mysql module and create a connection pool with the user details
const mysql = require('mysql');
const connectionPool = mysql.createPool({
    connectionLimit: 1,
    host: "localhost",
    user: "root",
    password: "",
    database: "recipe",
    debug: false
});

//Wrapper for all database tests
describe('Databases Tests', () => {

    //Mocha test for getAllecipes method in database module.
    describe('#Get all recipes', () => {
        it('return all recipes from db', (done) => {
            //Mock response object for test
            let response= {};

            /* When there is an error response.staus(ERROR_CODE).json(ERROR_MESSAGE) is called
               Mock object should fail test in this situation. */
            response.status = (errorCode) => {
                return {
                    json: (errorMessage) => {
                        console.log("Error code: " + errorCode + "; Error message: " + errorMessage);
                        assert.fail("Error code: " + errorCode + "; Error message: " + errorMessage);
                        done();
                    }
                }
            };

            //Add send function to mock object
            response.send = (result) => {
                //Convert result to JavaScript object
                let resObj = JSON.parse(result);


                //Check that an array of customers is returned
                resObj.should.be.a('array');

                //Check that appropriate properties are returned
                if(resObj.length > 1){
                    resObj[0].should.have.property('User_Account_id');
                    resObj[0].should.have.property('Username');
                    resObj[0].should.have.property('User_Password');
                }

                //End of test
                done();
            };

            //Call function that we are testing
            db.getAllCook(response);
        });
    });

    //Mocha test for add recipe method in database module.
    describe('#ADD Recipe ', () => {
        it('adding a cook to the database', (done) => {
            //Mock response object for test
            let response= {};

            /* When there is an error response.staus(ERROR_CODE).json(ERROR_MESSAGE) is called
               Mock object should fail test in this situation. */
            response.status = (errorCode) => {
                return {
                    json: (errorMessage) => {
                        console.log("Error code: " + errorCode + "; Error message: " + errorMessage);
                        assert.fail("Error code: " + errorCode + "; Error message: " + errorMessage);
                        done();
                    }
                }
            };

            //Add send function to mock object. This checks whether function is behaving correctly
            response.send = () => {
                //Check that recipe has been added to database
                let sql = "SELECT Recipe_Description FROM user_recipe  WHERE Recipe_Description='" + recipe_description + "'";
                connectionPool.query(sql, (err, result) => {
                    if (err){//Check for errors
                        assert.fail(err);//Fail test if this does not work.
                        done();//End test
                    }
                    else{
                        
                        expect(result.length).to.equal(1);

                        //Clean up database
                        sql = "DELETE FROM user_recipe WHERE Recipe_Description='" + recipe_description + "'";
                        connectionPool.query(sql, (err, result) => {
                            if (err){//Check for errors
                                assert.fail(err);//Fail test if this does not work.
                                done();//End test
                            }
                            else{
                                done();//End test
                            }
                        });
                    }
                });
            };

           
            let recipe_description = Math.random().toString(36).substring(2, 10); // random text assigned to recipe description
            let recipe_title = Math.random().toString(36).substring(2, 15); 
            let image_url = "1.png";
            let username = "Razer";

            //Call function to add student to database
            db.addDetails(recipe_description, recipe_title, image_url,username, response);
        });
    });
});


describe('API1 CALLS', () => {

    //Test of GET request sent to /customers
    describe('/GET ALL RECIPE', () => {
        it('CHECK EACH COLUMN', (done) => {
            chai.request(server)
                .get('/getAllCook')
                .end((err, response) => {
                    //Check the status code
                    response.should.have.status(200);

                    //Convert returned JSON to JavaScript object
                    let resObj = JSON.parse(response.text);


                    //Check that an array of customers is returned
                    resObj.should.be.a('array');

                    //Check that appropriate properties are returned
                    if(resObj.length > 1){
                        resObj[0].should.have.property('User_Account_id');
                        resObj[0].should.have.property('Username');
                        resObj[0].should.have.property('User_Password');

                    }

                    //End test
                    done();
                });
        });
    });
});