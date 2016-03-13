Ext.define('MyApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',
  onLoginClick: function() {

    // This would be the ideal location to verify the user's credentials via
    // a server-side lookup. We'll just move forward for the sake of this example.

    // Set the localStorage value to true
    localStorage.setItem("TutorialLoggedIn", true);
    console.log('onLoginClick login:', true);
    // Remove Login Window
    this.getView().destroy();

    // Add the main view to the viewport
    Ext.create({
      xtype: 'app-main'
    });
    //TODO : ajax form


    /*var form = this.lookupReference('form');
    if(form.isValid()) {
      this.login({
        data: form.getValues(),
        scope: this,
        success: 'onLoginSuccess',
        failure: 'onLoginFailure'
      });
    }*/
  },
  login: function(options) {
    Ext.Ajax.request({
      url: '/url/path/to/server',
      method: 'GET',
      params: options.data,
      scope: this,
      callback: this.onLoginReturn,
      original: options
    });
  },

  onLoginReturn: function(options, success, response) {
    options = options.original;

    if (success) {
      console.log('log in success');
      var json = response.responseText;
      var result = Ext.decode(json);

      if(result.success){
        this.getView().destroy();

        // localStorage.setItem("isClientLogined", true);
        sessionStorage.setItem("isClientLogined", true);
        Ext.callback(options.success, options.scope, [options.data.userCode, options.data.password]);

        Ext.create({
          xtype: 'app-menu'
        });
      }else{

      }
    }
  },

  onLoginFailure: function() {
    Ext.getBody().unmask();
  },
  onLoginSuccess: function(logname, logpass) {
  }

});