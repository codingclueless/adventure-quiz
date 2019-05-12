import quests from '../quest/quest-data.js';

const api = {
    storage: localStorage,
    signUp(passenger) {
        const json = JSON.stringify(passenger);
        api.storage.setItem('passenger', json);
    },
    getPassenger() {
        const json = api.storage.getItem('passenger');
        const passenger = JSON.parse(json);
        return passenger;
    },
    getQuests() {
        return quests;
    }
};

export default api; 