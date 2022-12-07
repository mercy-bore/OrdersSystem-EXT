
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

    // ! columns
    columns: [

     

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
       
    ]

});