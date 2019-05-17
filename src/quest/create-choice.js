function createChoice(questChoice) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    
    label.setAttribute('for', questChoice.id);
    label.textContent = questChoice.description;
    
    input.id = questChoice.id;
    input.type = 'radio';
    input.name = 'choice-radio';
    input.value = questChoice.id;
    

    div.appendChild(label);
    div.appendChild(input);

    return div;
}

export default createChoice;