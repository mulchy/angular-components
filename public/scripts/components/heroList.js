angular.module('heroApp')
  .component('heroList', {
    templateUrl: 'templates/heroList.html',
    controller: HeroListController
  });

function HeroListController() {
  console.log('hero controller loaded');
  var ctrl = this;
  ctrl.hero = {};
  ctrl.heroes = [];
  ctrl.addHero = function(hero) {
    console.log('adding hero');
    ctrl.heroes.push(angular.copy(hero));
  };

  ctrl.deleted = function(hero) {
    ctrl.heroes = ctrl.heroes.filter(function(listHero) {
      return !angular.equals(hero, listHero);
    });

    // var idx = ctrl.heroes.indexOf(hero);
    // if (idx >=0 ){
    //   ctrl.heroes.splice(idx, 1);
    // }
  };
}
