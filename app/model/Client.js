
Ext.define('MyApp.model.Client',{
    extend : 'Ext.data.Model',
    fields : [
        'id','email','firstName','lastName'
    ],
    proxy: {
        url: MyApp.AppConfig.api.ApiClient,
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty : 'data',
            totalProperty: 'total'
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
        },
        simpleSortMode: true
    }
});