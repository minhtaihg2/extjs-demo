/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.Client', {
    extend: 'Ext.grid.Panel',
    xtype: 'list-client',

    requires: [
        'MyApp.store.Client'
    ],

    title: 'Khách hàng',

    store: {
        type: 'store-client'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id' }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
