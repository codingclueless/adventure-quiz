import scoreQuest from '../src/quest/score-quest.js';

const test = QUnit.test;

test('score the quest', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        patience: 50,
        perks: 0
    };

    const choice = {
        patience: -25,
        perks: 0
    };

    const expected = {
        patience: 25,
        perks: 0
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const updatedUser = scoreQuest(user, choice);

    //Assert
    assert.deepEqual(updatedUser, expected);
});