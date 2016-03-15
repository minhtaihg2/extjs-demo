Ext.define('MyApp.view.main.Tabs', {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.layout.container.Card',
        'MyApp.view.main.Chart',
        'MyApp.view.main.List'
    ],
    xtype: 'layout-cardtabs',
    style: 'background-color:#dfe8f6; ',
    defaults: {
        bodyPadding: 15
    },
    items:[
        {
            title: 'Thống kê Ngày',
            xtype : 'column-basic-3d'
        },
        {
            title: 'Thống kê tuần',
            xtype : 'mainlist'
        },
        {
            title: 'Thống kê tháng',
            html: 'This is tab 3 content.'
        }
    ]

});