const quest1 = {
    id: 'phone-quest',
    title: 'Hey buddy, why you screaming?',
    map: {
        top: '0%',
        left: '0%'
    },
    image: 'phone-quest.png',
    description: `Let's face it, life sucks right now. But at least the stoned pizza boy at Sbarro's 
        hooked you up with extra pepperoni and the latest issue of people magazine arrived at the 
        gift shop today, "wow, celebrities really are just like us!" As you sit down to relax and try 
        to get informed on what Bill Cosby's prison diet is some a$$hole wearing Ed Hardy pants, an Affliction 
        t-shirt and a bluetooth ear piece starts yelling in full detail about his latest "conquest" in Vegas to what you can only 
        assume is a true douche on the other end...`,
    choices: [{
        id: 'patient',
        description: `You sit there quietly and act as if it doesn't bother you.`,
        result: `Your patience (+25) is amazing, but you lack self-respect. You might want 
        to seek therapy and deal with your failure to express yourself!`,
        patience: +25,
        perks:''
    }, {
        id: 'neutral',
        description: `Even though you are annoyed, you move to a seat at a different gate.`,
        result: `As you walk away pondering the IQ level of the sad female who 
        chooses to mate with this meat puppet your patience is rewarded (+20). But, I'm guessing 
        you are also the type of person who doesn't say anything when you get the wrong bag 
        at the drive-thru, "Well honey, looks like were having onion rings tonight." Maybe in the 
        future you will grow a pair. As for today, you now have a beautiful view of 
        the runway you can't get on.`,
        patience: +20,
        perks: ''
    }, {
        id: 'impatient',
        description: `You decide pizza is of less value then silence and throw your slice at him.`,
        result: `Papa John would be proud! I didn't think you had it in you, but you picked a fight 
        with a true gobstopper. As he peacocks up and tells you he once learned capoeira during carnival 
        in Brazil, you disrepectfully slap his faked tanned face with your riviting journalistic choice. 
        Its safe to say you lack patience (-25), but damn that must have felt good! As TSA agents escort 
        you away to perform a full cavity search the pizza boy takes pity and rewards you with a 
        free slice in the future.`,
        patience: -25,
        perks: 'pizza'
    }]
};
const quest2 = {
    id: 'bar-quest',
    title: 'Who likes alcohol during a layover?',
    map: {
        top: '0%',
        left: '0%'
    },
    image: 'bar-quest.png',
    description: `static`,
    choices: [{
        id: 'patient',
        description: `static description`,
        result: `static result`,
        patience: +25,
        perks:''
    }, {
        id: 'neutral',
        description: `static description`,
        result: `static result`,
        patience: +20,
        perks: 'beer'
    }, {
        id: 'impatient',
        description: `static description`,
        result: `static result`,
        patience: -25,
        perks: ''
    }]
};
const quest3 = {
    id: 'kid-quest',
    title: 'Hey lady, control your kid!',
    map: {
        top: '0%',
        left: '0%'
    },
    image: 'kid-quest.png',
    description: `static`,
    choices: [{
        id: 'patient',
        description: `static description`,
        result: `static result`,
        patience: +25,
        perks:''
    }, {
        id: 'neutral',
        description: `static description`,
        result: `static result`,
        patience: +20,
        perks: 'admiral club'
    }, {
        id: 'impatient',
        description: `static description`,
        result: `static result`,
        patience: -25,
        perks: ''
    }]
};
const quest4 = {
    id: 'gate-quest',
    title: 'Gate change...What?!',
    map: {
        top: '0%',
        left: '0%'
    },
    image: 'gate-quest.png',
    description: `static`,
    choices: [{
        id: 'patient',
        description: `static description`,
        result: `static result`,
        patience: +25,
        perks:'travel voucher'
    }, {
        id: 'neutral',
        description: `static description`,
        result: `static result`,
        patience: +20,
        perks: ''
    }, {
        id: 'impatient',
        description: `static description`,
        result: `static result`,
        patience: -25,
        perks: ''
    }]
};
