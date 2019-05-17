import loadProfile from '../load-profile.js';
import api from '../services/api.js';
import createChoice from './create-choice.js';
import scoreQuest from '../quest/score-quest.js';

loadProfile();

const choicesParentNode = document.getElementById('choices');
const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-image');
const choiceForm = document.getElementById('choice-form');
const questDescription = document.getElementById('quest-description');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

const questData = api.getQuest(id);
const user = api.getPassenger();

questTitle.textContent = questData.title;
questImage.src = './assets/' + questData.image;
questDescription.textContent = questData.description;

for(let i = 0; i < questData.choices.length; i++) {
    const choice = questData.choices[i];
    const choiceRadio = createChoice(choice);
    choicesParentNode.appendChild(choiceRadio);
}

choiceForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice-radio');

    for(let index = 0; index < questData.choices.length; index++) {
        const choice = questData.choices[index];
        if(choice.id === choiceId) {
            api.saveUser(scoreQuest(user, choice, questData.id));
            loadProfile();
            resultDescription.textContent = choice.result;
        }
    }
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
});

loadProfile();


