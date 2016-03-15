Ext.define('MyApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

  onLoginClick: function() {
    var form = this.lookupReference('form');
    if(form.isValid()) {
      this.login({
        data: form.getValues(),
        scope: this,
        success: 'onLoginSuccess',
        failure: 'onLoginFailure'
      });
    }
  },
  login: function(options) {
    Ext.Ajax.request({
      url: MyApp.AppConfig.api.ApiUrlLogin,
      method: 'POST',
      params: options.data,
      scope: this,
      callback: this.onLoginReturn,
      original: options
    });
  },

  onLoginReturn: function(options, success, response) {
    options = options.original;

    if (success) {
      var json = response.responseText;
      var result = Ext.decode(json);
      if(result.success){
        this.getView().destroy();

        localStorage.setItem("TutorialLoggedIn", true);
        localStorage.setItem("user", result.data.email);

        //sessionStorage.setItem("isClientLogined", true);
        Ext.callback(options.success, options.scope, [options.data.userCode, options.data.password]);

        Ext.create({
          xtype: 'app-main'
        });
      }else{
        //TODO message
        Ext.Msg.alert('Login', result.message);
      }
    }
  },

  onLoginFailure: function() {
    Ext.getBody().unmask();
  },
  onLoginSuccess: function(logname, logpass) {
  }

});