import createCompletedQuest from '../src/quest/create-completed-quest.js';

const test = QUnit.test;

test('create completed quest element', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quest = {
        title: 'Gate change...What?!',
    };

    const expected = '<span>Gate change...What?!</span>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createCompletedQuest(quest);

    //Assert
    assert.deepEqual(dom.outerHTML, expected);
});