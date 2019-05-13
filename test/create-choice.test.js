import createChoice from '../src/quest/create-choice.js';

const test = QUnit.test;

test('create quest choice radio', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const questChoice = {
        id: 'patient',
        description: ``,
        result: ``,
        patience: +25,
        perks:''
    };
    
    const expected = '<div><label for="patient"></label><input id="patient" type="radio" name="choice-radio" value="patient"></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createChoice(questChoice);

    //Assert
    assert.deepEqual(dom.outerHTML, expected);
});