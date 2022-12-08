Ext.define('PlaceHolder.view.posts.PostForm', {
    extend: 'Ext.window.Window',
    xtype: 'postform',
    controller: 'postformcontroller',
    title: 'Add Post',
    width: 600,
    maximizable: true,
    modal: true,
    autoShow: true,
    layout: 'fit',
    //items of the window container
    items: [{
        xtype: 'form',
        layout: 'form',
        reference: 'postdetailsform',
        jsonSubmit: true,
        //items of the form container
        items: [{
                xtype: 'numberfield',
                name: 'userId',
                reference: 'userId',
                fieldLabel: 'User Id'
            },
            {
                xtype: 'numberfield',
                name: 'id',
                fieldLabel: 'Post Id'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Title',
                name: 'title'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Body',
                name: 'body'
            },
            {
                xtype: 'filefield',
                name: 'photo',
                fieldLabel: 'Photo',
                labelWidth: 50,
                msgTarget: 'side',
                allowBlank: false,
                anchor: '100%',
                buttonText: 'Select Photo...'
            },
            {
                xtype: 'timefield',
                name: 'in',
                fieldLabel: 'Time In',
                minValue: '6:00 AM',
                maxValue: '8:00 PM',
                increment: 30,
                anchor: '100%'
            }, {
                xtype: 'timefield',
                name: 'out',
                fieldLabel: 'Time Out',
                minValue: '6:00 AM',
                maxValue: '8:00 PM',
                increment: 30,
                anchor: '100%'
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
            {
                text: 'Upload',
                handler: function() {
                    var form = this.up('form').getForm();
                    if(form.isValid()) {
                        form.submit({
                            url: 'photo-upload.php',
                            waitMsg: 'Uploading your photo...',
                            success: function(fp, o) {
                                Ext.Msg.alert('Success', 'Your photo "' + o.result.file +
                                                         '" has been uploaded.');
                            }
                        });
                    }
                }
            },

        ]
    }]

});