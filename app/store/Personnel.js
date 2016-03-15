Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone'
    ],

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" },
        { name: 'Ken Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Dean',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Stave',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Nina',     email: "mr.data@enterprise.com",        phone: "555-444-4444" },
        { name: 'Davig', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Red',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Blue',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
