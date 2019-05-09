const test = QUnit.test;
import api from '../src/services/api.js';

QUnit.testStart(() => {
    sessionStorage.clear();
});

api.storage = sessionStorage;

test('saves and gets sign up data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const passenger = {
        flight: 'portland',
        passenger: 'business-man',
        patience: 50,
        perks: 0,
        completed: {}
    };
    //Act 
    // Call the function you're testing and set the result to a const
    api.signUp(passenger);
    const result = api.getPassenger();
    //Assert
    assert.deepEqual(result, passenger);
});