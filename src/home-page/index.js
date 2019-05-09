import makePassenger from './make-passenger.js';

const createPassenger = document.getElementById('create-passenger');

createPassenger.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(createPassenger);
    const passenger = makePassenger(formData);

    console.log(passenger);
})