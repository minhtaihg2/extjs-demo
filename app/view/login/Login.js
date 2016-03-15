Ext.define('MyApp.view.login.Login', {
  extend: 'Ext.window.Window',
  xtype: 'login',

  requires: [
    'MyApp.view.login.LoginController',
    'Ext.form.Panel'
  ],

  controller: 'login',
  bodyPadding: 10,
  title: 'Đăng nhập hệ thống',
  closable: false,
  autoShow: true,

  items: {
    xtype: 'form',
    reference: 'form',
    items: [{
      xtype: 'textfield',
      name: 'email',
      fieldLabel: 'Email',
      allowBlank: false
    }, {
      xtype: 'textfield',
      name: 'password',
      inputType: 'password',
      fieldLabel: 'Password',
      allowBlank: false
    }, {
      xtype: 'displayfield',
      hideEmptyLabel: false,
      value: 'Enter any non-blank password'
    }],
    buttons: [{
      text: 'Login',
      formBind: true,
      listeners: {
        click: 'onLoginClick'
      }
    }]
  }
});