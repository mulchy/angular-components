angular.module('heroApp')
  .component('editableField', {
    controller: EditableField,
    templateUrl: 'templates/editableField.html',
    bindings: {
      content: '<',
      onUpdate: '&'
    }
  });

function EditableField() {
  var ctrl = this;
  ctrl.editMode = false;

  ctrl.save = function(content) {
    console.log('saving!');
    ctrl.onUpdate({value: content});
    ctrl.toggleEdit();
  };

  ctrl.toggleEdit = function() {
    console.log('toggling edit mode!');
    ctrl.editMode = !ctrl.editMode;
  };
}
