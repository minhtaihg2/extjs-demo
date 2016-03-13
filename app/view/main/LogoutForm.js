Ext.define('MyApp.view.main.LogoutForm', {
    extend: 'Ext.form.Panel',
    xtype: 'logoutForm',

    controller: 'appHeader',
    
    width: 300,
    bodyPadding: 10,

    items: [{
        margin: '0 0 20 0',
        xtype: 'component',
        html: [
            'Logout?'
        ]
    }],

    buttons: [
        { 
            text:'Yes',
            handler: 'onClickButton',
        }, { 
            text:'No',
            handler: 'onClose' 
        }
    ]
});