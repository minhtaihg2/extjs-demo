/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.Client', {
    extend: 'Ext.grid.Panel',
    xtype: 'list-client',

    requires: [
        'MyApp.store.Client',
        'MyApp.view.form.WindowClientEdit',
        'MyApp.view.main.ClientController',
        'Ext.toolbar.Paging'
    ],

    title: 'Khách hàng',
    controller: 'client',
    loadMask: true,
    store: {
        type: 'store-client'
    },
    initComponent: function(){
        Ext.apply(this, {
            columns: [
                {header: 'ID', dataIndex: 'id', flex: 1},
                {header: 'Email', dataIndex: 'email', flex: 2},
                {header: 'FirstName', dataIndex: 'firstName', flex: 1},
                {header: 'LastName', dataIndex: 'lastName', flex: 1}
            ],
            bbar: Ext.create('Ext.PagingToolbar', {
                store: {
                    type: 'store-client'
                },
                displayInfo: true,
                displayMsg: '{0} - {1} of {2}',
                emptyMsg: "No user to display"
            })
        });
        this.callParent();
    },
    listeners: {
        select: 'onItemSelectedEdit'
    },
    afterRender: function(){
        this.callParent(arguments);
        this.getStore().loadPage(1);
    }
});
