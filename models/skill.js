
const skills = [
    { id: 125223, skill: 'JavaScript', skillLevel: 10 },
    { id: 127904, skill: 'Express', skillLevel: 7 },
    { id: 139608, skill: 'MongoDb', skillLevel: 5 },
    { id: 127223, skill: 'React', skillLevel: 4 },
    { id: 127004, skill: 'HTML', skillLevel: 8 },
    { id: 139008, skill: 'CSS', skillLevel: 3 },
    { id: 125023, skill: 'SQL', skillLevel: 2 },
    { id: 127604, skill: 'node.js', skillLevel: 6 },
];

module.exports = {
    allSkills,
    oneSkill,
    createSkill,
    deleteSkill,
}

function allSkills() {
    return skills
}
function oneSkill(id) {
    id = parseInt(id);
    console.log("Requested ID:", id);
    const foundSkill = skills.find(skill => skill.id === id);
    console.log("Found skill:", foundSkill);
    return foundSkill;
}

function createSkill(skill) {
    skill.id = Date.now() % 100000
    skills.push(skill)
    console.log(skills)
}
function deleteSkill(id) {
    id = parseInt(id)
    const index = skills.findIndex(skill => skill.id === id)
    if (index != -1) skills.splice(index, 1)
    else console.log('Skill not found')
}