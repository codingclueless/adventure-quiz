function makePassenger(formData) {
    const passenger = {
        flight: formData.get('flight'),
        passenger: formData.get('passenger'),
        patience: 50,
        perks: 0,
        completed: {}
    };
   
    return passenger;
}

export default makePassenger;