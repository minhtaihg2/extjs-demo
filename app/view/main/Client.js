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
        {header: 'ID', dataIndex: 'id', flex: 1},
        {header: 'Email', dataIndex: 'email', flex: 2},
        {header: 'FirstName', dataIndex: 'firstName', flex: 1},
        {header: 'LastName', dataIndex: 'lastName', flex: 1}
    ]
    /* listeners: {
        select: 'onItemSelected'
    }*/
});
