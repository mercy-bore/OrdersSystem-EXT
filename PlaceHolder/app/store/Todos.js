//appName.folderName.className
// classname,configOBj,callback

Ext.define('PlaceHolder.store.Todos', {

    //extentions to Ext.data.Store
    extend: 'Ext.data.Store',

    //! alias -> store.storename

    alias: 'store.todos',

    //! fields => refence to the model fields 

    //!model 
    model: 'PlaceHolder.model.Todo',

    //ajax request
    //! proxy

    proxy: {
        url: 'https://jsonplaceholder.typicode.com/todos/',
        type: 'rest',
        reader: {
            type: 'json',
            // rootProperty
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
    pageSize: 10
    //* initiate the request to get data automaticall on application load





});