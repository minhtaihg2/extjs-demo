Ext.define('MyApp.view.main.HeaderToolBar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'apptoolbar',

	width: 400,
	items: ['->', {
		text: 'Config',
		iconCls: 'fa fa-cog'
	}, {
		text: 'Question',
		iconCls: 'fa fa-question-circle'
	}, {
		text: 'Info',
		iconCls: 'fa fa-info-circle'
	}, {
		text: 'Hello Harvey ',
		iconCls: 'fa fa-user',
		menu:[{
			text: 'User',
			iconCls: 'fa fa-sign-out',
			listeners: {
				click: 'onLogout'
			}
		}, {
			text: 'Profile',
			iconCls: 'fa fa-key'
		}, {
			text: 'My order',
			iconCls: 'fa fa-info'
		}, {
			text: 'My dashboard',
			iconCls: 'fa fa-smile-o',
		}]
	}]
});