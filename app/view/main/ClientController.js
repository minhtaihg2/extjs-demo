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

            // A Window is a floating component, so by default it is not connected
            // to our main View in any way. By adding it, we are creating this link
            // and allow the window to be controlled by the main ViewController,
            // as well as be destroyed automatically along with the main View.
            this.getView().add(win);
        }

        win.show();
        /*Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);*/
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
            form.reset();
            this.lookupReference('popupWindow').hide();
            Ext.MessageBox.alert(
                'Thank you!',
                'Your inquiry has been sent. We will respond as soon as possible.'
            );
        }
    }
});
