Ext.define('MyApp.store.Client', {
    extend: 'Ext.data.Store',

    alias: 'store.store-client',
    model: 'MyApp.model.Client',
    autoLoad: true,
    proxy: {
        url: MyApp.AppConfig.api.ApiClient,
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty : 'data'
        },
        headers: {
            'Content-Type': 'application/json',
            'token': 'Bearer ' + localStorage.getItem('token'),
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        listeners: {
            load: function (store, records, success) {
                console.log(1);
            }
        }
    }
});