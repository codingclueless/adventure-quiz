import api from '../services/api.js';
import createChoice from './create-choice.js';
import loadProfile from '../load-profile.js';

loadProfile();

const choicesParentNode = document.getElementById('choices');
const questTitle = document.getElementById('title');
const questImage = document.getElementById('image');
const questDescription = document.getElementById('description');

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

const questData = api.getQuest(id);

questTitle.textContent = questData.title;
questImage.src = './assets/' + questData.image;
questDescription.textContent = questData.description;

for(let i = 0; i < questData.choices.length; i++) {
    const choice = questData.choices[i];
    const choiceRadio = createChoice(choice);
    choicesParentNode.appendChild(choiceRadio);
}




