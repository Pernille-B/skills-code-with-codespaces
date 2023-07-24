function skillsMember()function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'Django'];
    var skillsList = document.getElementById('skills');

    for (var i = 0; i < skills.length; i++) {
        var skill = document.createElement('li');
        skill.textContent = skills[i];
        skillsList.appendChild(skill);
    }
}