const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSelected,
    update
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill Details'
    })
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'My Dev Skills'
    });
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'Add Skill' });
}

function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSelected(req, res) {
    Skill.deleteSkill(req.params.id);
    res.redirect('/skills');
}

function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}