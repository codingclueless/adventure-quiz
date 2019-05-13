function scoreQuest(user, choice) {
    user.patience = user.patience + choice.patience;
    user.perks = user.perks + choice.perks;
    return user;
}

export default scoreQuest;