import hasCompletedAllQuest from '../src/end/has-completed-all-quest.js';

const test = QUnit.test;

test('return true if user completes all quests', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quests = [{ id: 'quest1' }, { id: 'quest2' }, { id: 'quest3' }];
    const user = {
        completed: {
            quest1: true,
            quest2: true,
            quest3: true
        }
    };
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = hasCompletedAllQuest(quests, user);

    //Assert
    assert.equal(result, expected);
});