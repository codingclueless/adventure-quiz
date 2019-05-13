function scoreQuest(user, choice, questId) {
    user.patience = user.patience + choice.patience;
    user.perks = user.perks + choice.perks;
    user.completed[questId] = true;
    return user;
}

export default scoreQuest;