Ext.define("MyApp.view.menu.Menu",{
    xtype: 'appMenu',
    controller: 'menu',
    extend: 'Ext.tab.Panel',
    ui: 'navigation',
    tabPosition: 'left',
    tabRotation: 0,
    tabBar: {
        // turn off borders for classic theme.  neptune and crisp don't need this
        // because they are borderless by default
        border: false
    },
    defaults: {
        textAlign: 'left',
        bodyPadding: 15
    },
    items: [{
        title: 'Home',
        glyph: 72,
        html : '1111',
    }, {
        title: 'Users',
        glyph: 117,
        html : '1411',
    }, {
        title: 'Groups',
        glyph: 85,
        html : '1311',
    }, {
        title: 'Settings',
        glyph: 42,
        html : '1121',
    }]
});