
Ext.define('PlaceHolder.view.users.UserGrid', {
    //extend
    extend: 'Ext.grid.Panel',

    // xtype name to make use when instantiating this view
    xtype: 'usergrid',

    //! mandatory
    // ! store
    store: {
        type: 'users'
    },

    // ! columns
    columns: [

     

        {
            text: ' ID', //* displayable label of the column
            dataIndex: 'id'
        },
        {
            text: 'Name', //* displayable label of the column
            dataIndex: 'name'
        },
        {
            text: 'Username', //* displayable label of the column
            dataIndex: 'username'
        },
        {
            text: 'Email', //* displayable label of the column
            dataIndex: 'email'
        },
    ]

});