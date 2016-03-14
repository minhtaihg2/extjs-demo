Ext.define('MyApp.view.main.Tabs', {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.layout.container.Card',
        'MyApp.view.main.Chart'
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
            html: 'This is tab 2 content.'
        },
        {
            title: 'Thống kê tháng',
            html: 'This is tab 3 content.'
        }
    ]

});