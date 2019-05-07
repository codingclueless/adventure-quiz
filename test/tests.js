const test = QUnit.test;

function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        passenger: formData.get('passenger'),
        patience: 50,
        comps: 0
    };
    return user;
}

test('create user object from form data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('name', 'bob');
    formData.set('passenger', 'old-lady');

    //Act 
    // Call the function you're testing and set the result to a const
    const user = makeUser(formData);
    //Assert
    assert.deepEqual(user, {
        name: 'bob',
        passenger: 'old-lady',
        patience: 50,
        comps: 0
    });
});