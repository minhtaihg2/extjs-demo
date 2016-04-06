Ext.define('MyApp.view.form.WindowClientEdit', {
    extend: 'Ext.window.Window',
    xtype: 'form-contact-window',

    reference: 'popupWindow',

    title: 'Edit client',
    width: 400,
    height: 550,
    minWidth: 300,
    minHeight: 380,
    resizable: true,
    modal: true,
    defaultFocus: 'firstName',
    closeAction: 'hide',

    items: [{
        xtype: 'form',
        reference: 'windowForm',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        border: false,
        bodyPadding: 10,

        fieldDefaults: {
            msgTarget: 'side',
            labelAlign: 'top',
            labelWidth: 100,
            labelStyle: 'font-weight:bold'
        },

        items: [{
            xtype: 'fieldcontainer',
            fieldLabel: 'Your Name',
            labelStyle: 'font-weight:bold;padding:0;',
            layout: 'hbox',
            defaultType: 'textfield',

            fieldDefaults: {
                labelAlign: 'top'
            },

            items: [{
                flex: 1,
                name: 'firstName',
                itemId: 'firstName',
                afterLabelTextTpl: [
                    '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                ],
                fieldLabel: 'First',
                allowBlank: false
            },{
                flex: 1,
                name: 'lastName',
                afterLabelTextTpl: [
                    '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                ],
                fieldLabel: 'Last',
                allowBlank: false,
                margin: '0 0 0 5'
            }]
        }, {
            xtype: 'textfield',
            name : 'email',
            fieldLabel: 'Your Email Address',
            afterLabelTextTpl: [
                '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
            ],
            vtype: 'email',
            allowBlank: false
        }, {
            xtype: 'textfield',
            fieldLabel: 'Note',
            name : 'notes',
            allowBlank: true
        }, {
            xtype: 'textareafield',
            fieldLabel: 'Profile Details',
            name : 'profileDetails',
            labelAlign: 'top',
            flex: 1,
            margin: '0',
            allowBlank: true
        },{
            xtype: 'textfield',
            fieldLabel: 'Id',
            name : 'id',
            labelAlign: 'top',
            flex: 1,
            margin: '0',
            allowBlank: true
        }],

        buttons: [
            {
                text: 'Update',
                handler: 'onFormSubmit'
            },{
            text: 'Cancel',
            handler: 'onFormCancel'
        } ]
    }]
});