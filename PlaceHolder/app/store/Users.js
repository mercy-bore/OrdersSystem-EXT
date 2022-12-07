Ext.define('PlaceHolder.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    storeId: 'users',
    model: 'PlaceHolder.model.User',
    proxy: {
        type: 'rest',
        url: 'https://jsonplaceholder.typicode.com/users',
        reader: {
            type: 'json',
            totalProperty: 'totalCount', //
            rootProperty: 'rows'

        }
    },
    autoLoad: true,
    sorters: [{
            property: 'name',
            direction: 'ASC'
        },
        {
            property: 'id',
            direction: 'DESC'
        }
    ],
    groupField: 'name',
    pageSize: 5
});