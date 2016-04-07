/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.ClientController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.client',
    onItemSelectedEdit: function (sender, record) {
        var win = this.lookupReference('popupWindow');

        if (!win) {
            win = new MyApp.view.form.WindowClientEdit();
            this.getView().add(win);
        }

        win.show();
        this.lookupReference('windowForm').getForm().loadRecord(record)

    },

    onFormCancel: function() {
        this.lookupReference('windowForm').getForm().reset();
        this.lookupReference('popupWindow').hide();
    },

    onFormSubmit: function() {
        var formPanel = this.lookupReference('windowForm'),
            form = formPanel.getForm();
        if (form.isValid()) {
            // In a real application, this would submit the form to the configured url
            // form.submit();
            var _me = this;
            console.log('form :', form.getValues());
            Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json',
                    'token': 'Bearer ' + localStorage.getItem('token'),
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                url: MyApp.AppConfig.api.ApiClient + '/' + form.getValues().id,
                method: 'PUT',
                params: Ext.JSON.encode(form.getValues()),
                scope: this,
                callback: function(options, success, response){
                    if (success) {
                        console.log('success :', success,response);
                        form.reset();
                        _me.lookupReference('popupWindow').hide();
                        Ext.MessageBox.alert(
                            'Thank you!',
                            'Your client has been save!.'
                        );
                    }
                }
            });


        }
    }
});
