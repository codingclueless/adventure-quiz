import makePassenger from './make-passenger.js';
import api from '../services/api.js';

const createPassenger = document.getElementById('create-passenger');

createPassenger.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(createPassenger);
    const passenger = makePassenger(formData);

    api.signUp(passenger);

    window.location = '../../map.html';
});