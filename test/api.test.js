const test = QUnit.test;
import api from '../src/services/api.js';
import quests from '../src/quest/quest-data.js';

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

test('get all quests', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = quests;
    //Act 
    // Call the function you're testing and set the result to a const
    const results = api.getQuests();
    //Assert
    assert.deepEqual(results, expected);
});
