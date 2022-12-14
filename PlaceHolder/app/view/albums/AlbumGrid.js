
Ext.define('PlaceHolder.view.albums.AlbumGrid', {
    //extend
    extend: 'Ext.grid.Panel',

    // xtype name to make use when instantiating this view
    xtype: 'albumgrid',

    //! mandatory
    // ! store
    store: {
        type: 'albums'
    },
    selModel: 'checkboxmodel', ///alternative specifying the selection model

    // ! columns
    columns: [

        {
            xtype: 'rownumberer'
        },

        {
            text: 'User ID', //* displayable label of the column
            dataIndex: 'userId'
        },
        {
            text: 'ID', //* displayable label of the column
            dataIndex: 'id'
        },
        {
            text: 'Title', //* displayable label of the column
            dataIndex: 'title'
        },
       
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display posts {0} - {1} of {2}',
        emptyMsg: 'No post to display',
    },

});