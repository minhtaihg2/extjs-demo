Ext.define('MyApp.store.Client', {
    extend: 'Ext.data.Store',

    alias: 'store.store-client',
    model: 'MyApp.model.Client',
    autoLoad: true,
    pageSize: 25,
    remoteSort: true,
  /*  sorters: [{
        property: 'id',
        direction: 'DESC'
    }],*/

});