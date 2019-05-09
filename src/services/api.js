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
};

export default api; 