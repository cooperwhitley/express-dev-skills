const skills = [
    {id: 1, skill: 'HTML', grasp: 'solid'},
    {id: 2, skill: 'CSS', grasp: 'solid'},
    {id: 3, skill: 'JavaScript', grasp: 'almost solid'},
    {id: 4, skill: 'Node.js', grasp: 'shaky'},
    {id: 5, skill: 'Express', grasp: 'very slippery'},
    {id: 6, skill: 'React', grasp: 'none'},
    {id: 7, skill: 'MongoDB', grasp: 'none'},
    {id: 8, skill: 'Python / Django', grasp: 'none'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteSkill
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = skills.length + 1;
    skill.grasp = 'brand new skill';
    skills.push(skill);
}

function deleteSkill(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}