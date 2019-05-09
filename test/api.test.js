const test = QUnit.test;

QUnit.testStart(() => {
    sessionStorage.clear();
});

const api = {
    storage: localStorage,
    signUp(passenger) {
        const json = JSON.stringify(passenger);
        api.storage.setItem('passenger', json);
    },
    getPassenger() {
        const json = api.storage.getItem('passenger');
        const passenger = JSON.parse(json);
        return passenger;
    },
};


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