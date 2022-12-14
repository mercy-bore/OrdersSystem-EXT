Ext.define('PlaceHolder.view.users.UserGridController', {
    //! extend: Ext.app.ViewController
    extend: 'Ext.app.ViewController',
    //! controller.controllername
    alias: 'controller.usergridcontroller',

    onAddNewUser: function () {
        //1.
        // Ext.create('PlaceHolder.view.main.PostForm');
        this.showForm(null);



    },
   
    onAdduserMouseOver: function () {
        console.log("Mouse over");

    },
   
    onViewDetails: function () {
        //* get selected record from the grid
        let selectedGridid = 12;
        //
        this.showForm(selectedGridid);

    },
    //! refactor logic
    showForm: function (userId) {
        console.log(userId);
        Ext.create({
            xtype: 'userform' //symbolic name
        });
        //load form, details using the id
    },
    onFormFiledsDemo: function (btn, e, eOpts) {
        Ext.create({
            xtype: 'formwindow' //symbolic name
        });
    },
    onAddNewUser: function () {
        this.showForm(null);
    },
    onViewDetails: function () {
        let userId = 1;
        this.showForm(userId);
    },
    showForm: function (userId) {
        Ext.create({
            xtype: 'userformwindow'
        });
        //if userId is not null -> prefill the form with data
    },

    onAddNewUserWithColumns: function () {
        Ext.create({
            xtype: 'usermulticolumnwindowform',
        });
    },
    onAddNewUserWithVboxHbox: function () {
        Ext.create({
            xtype: 'userformwithhboxandvbox',
        });
    },

});