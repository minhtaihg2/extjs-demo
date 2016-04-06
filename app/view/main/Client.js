/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.Client', {
    extend: 'Ext.grid.Panel',
    xtype: 'list-client',

    requires: [
        'MyApp.store.Client',
        'MyApp.view.form.WindowClientEdit',
        'MyApp.view.main.ClientController'
    ],

    title: 'Khách hàng',
    controller : 'client',
    store: {
        type: 'store-client'
    },
    columns: [
        {header: 'ID', dataIndex: 'id', flex: 1},
        {header: 'Email', dataIndex: 'email', flex: 2},
        {header: 'FirstName', dataIndex: 'firstName', flex: 1},
        {header: 'LastName', dataIndex: 'lastName', flex: 1}
    ],
     listeners: {
        select: 'onItemSelectedEdit'
    }
});
