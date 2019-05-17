import api from './services/api.js';

function loadProfile() {
    const flight = document.getElementById('passenger-destination');
    const passenger = document.getElementById('passenger-icon');
    const patience = document.getElementById('patience');
    const perks = document.getElementById('perks');

    const passengerInfo = api.getPassenger();

    if(!passengerInfo) {
        window.location = './';
    }

    flight.textContent = passengerInfo.flight;
    passenger.src = './assets/' + passengerInfo.passenger + '.png';
    patience.textContent = passengerInfo.patience;
    perks.textContent = passengerInfo.perks;

}

export default loadProfile;