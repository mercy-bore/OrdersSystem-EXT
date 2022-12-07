Ext.define('PlaceHolder.view.users.UserFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userformcontroller',

    onFormReset: function () {
        let references = this.getReferences(); //array of references
        let form = references['userdetailsform'].getForm(); // get the form
        form.reset(); //reset the form


    },
    onFormSave: function () {
        let references = this.getReferences(); //array of references
        let form = references['userdetailsform'].getForm(); // get the form
        form.submit({
            method: 'POST',
            url: 'http://3.126.66.68:3000/users', //actual endpoint
            success: function (form, action) {
                alert("saved sucessfully" + action.result)
            },
            failure: function (form, action) {
                alert("saved sucessfully" + action.result)
            },

        });

    },


});