function createQuestLink(quest) {
    const link = document.createElement('a');

    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = './quest.html?' + searchParams.toString();
    link.textContent = 'Gate change...What?!';
    return link;
}

export default createQuestLink;