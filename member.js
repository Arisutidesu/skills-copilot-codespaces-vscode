function skillsMember() {
    return {
        restrict: 'E',
        TemplateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '"'
        }
    }
}