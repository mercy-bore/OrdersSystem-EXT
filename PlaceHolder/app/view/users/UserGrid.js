Ext.define('PlaceHolder.view.users.UserGrid', {
    extend: 'Ext.grid.GridPanel',
    xtype: 'usergrid',
    //!define the controlling code
    controller: 'usergridcontroller',
    store: {
        type: 'users',
    },
    // features: [{
    //         ftype: 'grouping',
    //         startCollapsed: true,
    //         groupHeaderTpl: '{columnName}: {name} ({rows.length} Post{[values.rows.length > 1 ? "s" : ""]})'
    //     },

    // ],

    selModel: 'checkboxmodel', ///alternative specifying the selection model
    columns: [{
            xtype: 'rownumberer'
        },

        {
            text: 'ID', //* displayable label of the column
            dataIndex: 'id',
        },
        {
            text: 'Name', //* displayable label of the column
            dataIndex: 'name'
        },
        {
            text: 'Email', //* displayable label of the column
            dataIndex: 'email',
           
        },
        {
            text: 'Username', //* displayable label of the column
            dataIndex: 'username',
            flex: 3,
            hidden: true
        },
        {
            text: 'Date', //* displayable label of the column
            dataIndex: 'date',
         
        },
        {
            text: 'City', //* displayable label of the column
            dataIndex: 'city',
         
        },


    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display posts {0} - {1} of {2}',
        emptyMsg: 'No post to display',
    },
    //top Bar

    tbar: [

        {
            xtype: 'button',
            text: 'Add New User',
            listeners: {
                //! eventname:'functionName in the controller
                click: 'onAddNewUser',
                mouseover: 'onAddUserMouseOver'
            }

        },
       
        {
            xtype: 'button',
            text: 'View User Details',

            //* registering default event handlers => click
            handler: 'onViewDetails'


        },
        {
            xtype: 'button',
            text: 'Remove Selected',
            hidden: true

        },
        {
            xtype: 'textfield',
            emptyText: 'Search',

        },
        {
            xtype: 'tbfill'
        },
        {
            xtype: 'button',
            text: 'Form Fields',
            handler: 'onFormFiledsDemo'
                },
        {
            xtype: 'button',
            text: 'Second Last'
        },
        {
            xtype: 'button',
            text: 'Last'
        }

    ]





});