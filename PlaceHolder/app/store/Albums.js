Ext.define('PlaceHolder.store.Albums', {
    extend: 'Ext.data.Store',
    alias: 'store.albums',
    storeId: 'albums',
    model: 'PlaceHolder.model.Album',
    proxy: {
        type: 'rest',
        url: 'https://jsonplaceholder.typicode.com/albums',
        reader: {
            type: 'json',
            totalProperty: 'totalCount', //
            rootProperty: 'rows'

        }
    },
    autoLoad: true,
    sorters: [{
            property: 'userId',
            direction: 'ASC'
        },
        {
            property: 'id',
            direction: 'DESC'
        }
    ],
    groupField: 'userId',
    pageSize: 5
});