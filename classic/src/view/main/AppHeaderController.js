Ext.define('MyApp.view.main.AppHeaderController', {
    extend: 'Ext.app.ViewController',
	
	alias: 'controller.appHeader',

	openLogoutWin: function() {
		var win = Ext.create('Ext.window.Window',{
			modal:true,
			border: 0,
			closable: true,
			resizable: false,
			
			header: true,
			title: 'Logout system',
			
			items:[{
				xtype:'logoutForm'
			}]
		});

		win.show();
	},
	onLogoutInForm: function(button) {
      console.log('logout :',true);
	},

	onLogout: function(menuItem) {
		this.openLogoutWin();
	},
	onClose: function(button) {
		var win = button.ownerCt.ownerCt.ownerCt;
		win.close();
	},
});