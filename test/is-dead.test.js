import isDead from '../src/end/is-dead.js';

const test = QUnit.test;

test('take user object and and determine if dead', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        patience: 0
    };

    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
   const result = isDead(user);
    //Assert
    assert.deepEqual(result, expected);
});

test('return false if alive' assert => {
    const user = {
        patience: 15
    };

    const expected = false;

    const result = isDead(user);

    assert.deepEqual(result, expected);
})