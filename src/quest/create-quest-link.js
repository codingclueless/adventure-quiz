
function createQuestLink(quest) {
    const link = document.createElement('a');

    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = './quest.html?' + searchParams.toString();
    link.textContent = 'gate quest';
    return link;
}

export default createQuestLink;