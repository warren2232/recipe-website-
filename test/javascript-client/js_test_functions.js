//File containing the functions that we are testing
import {CheckIfLogin} from './functions.js';

//Import expect from chai
let expect = chai.expect;

//Mocha test for multiply function
describe('#Checks if user is present in local storage', () => {
    it('check if user is login or not ', (done) => {
        //Run some tests that sensibly explore the behaviour of the function
        let result = CheckIfLogin("");
        expect(result).to.equal(false);

        result = CheckIfLogin("SteelSeries");
        expect(result).to.equal(true);

        //Call function to signal that test is complete
        done();
    });
});

