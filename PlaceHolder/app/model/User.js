Ext.define('PlaceHolder.model.User', {
    extend: 'Ext.data.Model',

    //! fields
    fields: [
        {
            name: 'id',
            type: 'integer'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'username',
            type: 'string'
        },
         {
            name: 'email',
            type: 'string'
        },

        

        {
            name: "address", //calculated field from the data
            convert: function (value, record) {
                console.dir(record)
                return record.get("street") + "-" + record.get("city")

            }
        }
    ],

});