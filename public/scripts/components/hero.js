angular.module('heroApp')
  .component('heroDetail', {
    templateUrl: 'templates/hero.html',
    controller: HeroDetailController,
    bindings: {
      hero: '<',
      onDelete: '&'
    }
  });

function HeroDetailController() {
  console.log('hero controller loaded');
  var ctrl = this;
  console.log(ctrl.hero);

  ctrl.updated = function(something) {
    console.log('In HeroController.updated, got something', something);
  };

  ctrl.delete = function() {
    ctrl.onDelete({hero: ctrl.hero});
  };
}
