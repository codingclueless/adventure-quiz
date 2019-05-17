import makePassenger from '../src/home-page/make-passenger.js';
const test = QUnit.test;

test('create user object from form data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    
    formData.set('flight', 'portland');
    formData.set('passenger', 'business-man');

    //Act 
    // Call the function you're testing and set the result to a const
    const passenger = makePassenger(formData);
    //Assert
    assert.deepEqual(passenger, {
        flight: 'portland',
        passenger: 'business-man',
        patience: 50,
        perks: 0,
        completed:{}
    });
});