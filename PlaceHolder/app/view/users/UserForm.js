Ext.define('PlaceHolder.view.users.UserForm', {
    extend: 'Ext.window.Window',
    xtype: 'userform',
    controller: 'userformcontroller',
    title: 'Add User',
    width: 600,
    maximizable: true,
    modal: true,
    autoShow: true,
    layout: 'fit',
    //items of the window container
    items: [{
        xtype: 'form',
        layout: 'form',
        reference: 'userdetailsform',
        jsonSubmit: true,
        //items of the form container
        items: [{
                xtype: 'numberfield',
                name: 'id',
                reference: 'id',
                fieldLabel: 'Id'
            },
            {
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Name',
                allowBlank: false  // requires a non-empty value
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Username',
                name: 'username'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Email',
                name: 'email',
                allowBlank: false //make it require

            },
            {
                xtype: 'datefield',
                fieldLabel: 'Date of Birth',
                name: 'birthDate',
                maxValue: new Date(), //barrier future date
                allowBlank: false //make it require
            },
            {
                xtype: 'datefield',
                anchor: '100%',
                fieldLabel: 'Todays Date',
                name: 'date',
                // The value does not match the format, but does match an altFormat; will be parsed
                // using the altFormat and displayed using the format.
                format: 'm d Y',
                altFormats: 'm,d,Y|m.d.Y',
                value:new Date()
            },
            {
                xtype: 'numberfield',
                anchor: '100%',
                name: 'bottles',
                fieldLabel: 'No of Subjects',
                value: 7,
                maxValue: 12,
                minValue: 0
            },
            {
                xtype     : 'textareafield',
                grow      : true,
                name      : 'message',
                fieldLabel: 'Message',
                anchor    : '100%'
            },
            {
                xtype: 'htmleditor',
                enableColors: false,
                enableAlignments: false,
                name: 'review',
                fieldLabel: 'Review'
            },
            {                
                name: 'completed',
                fieldLabel: 'Reported To Campus',
                xtype: 'checkbox',
                inputValue: 'YES',
                checked: true,
                listeners: {
                    change: 'onCheckBoxChange',
                }
            },
            {
                xtype: 'checkbox',
                fieldLabel: 'Exams',
                boxLabel  : 'Done',
                boxLabel  : 'Done',
                name      : 'topping',
                inputValue: '2',
                id        : 'checkbox1'
            }, 

        ],
        buttons: [{
                xtype: 'button',
                text: 'Reset',
                handler: 'onFormReset'
            },
            {
                xtype: 'button',
                text: 'Save',
                handler: 'onFormSave'
            },

        ]
    }]

});