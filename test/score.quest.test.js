import scoreQuest from '../src/quest/score-quest.js';

const test = QUnit.test;

test('score the quest', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        patience: 50,
        perks: 0,
        completed: {}
    };

    const choice = {
        patience: -25,
        perks: 0
    };

    const questId = 'burning-building';
    const expected = {
        patience: 25,
        perks: 0,
        completed: {
            'burning-building': true
        }
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const updatedUser = scoreQuest(user, choice, questId);

    //Assert
    assert.deepEqual(updatedUser, expected);
});