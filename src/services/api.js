import quests from '../quest/quest-data.js';

const api = {
    storage: localStorage,
    saveUser(passenger) {
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
    },
    getQuest(id) {
        for(let index = 0; index < quests.length; index++) {
            const quest = quests[index];

            if(quest.id === id) {
                return quest;
            }
        }
    },
};

export default api; 