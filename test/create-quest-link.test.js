import createQuestLink from '../src/quest/create-quest-link.js';
const test = QUnit.test;


test('creates correct quest link html', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quest = {
        id: 'gate-quest',
        title: 'Gate change...What?!',
    };

    const expected = '<a href="./quest.html?id=gate-quest">Gate change...What?!</a>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createQuestLink(quest);

    //Assert
    assert.deepEqual(dom.outerHTML, expected);
});