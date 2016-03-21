/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MyApp.Application', {
  extend: 'Ext.app.Application',

  name: 'MyApp',
  stores: [
    // TODO: add global / shared stores here
  ],
  requires: [
    'MyApp.view.main.AppHeader',
    'MyApp.view.main.HeaderToolBar',
    'MyApp.AppConfig'
  ],
  views: [
    'MyApp.view.login.Login',
    'MyApp.view.main.Main'
  ],
  launch: function () {
    // TODO - Launch the application
    // any type of storage, i.e., Cookies, LocalStorage, etc.
    var loggedIn;

    // Check to see the current value of the localStorage key
    loggedIn = localStorage.getItem("TutorialLoggedIn");

    // This ternary operator determines the value of the TutorialLoggedIn key.
    // If TutorialLoggedIn isn't true, we display the login window,
    // otherwise, we display the main view
    Ext.create({
      xtype: loggedIn ? 'app-main' : 'login'
    });
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  }
});
Ext.Ajax.defaultHeaders = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
};