Ext.define('MyApp.store.Chart', {
    extend: 'Ext.data.Store',
    alias: 'store.chart-store',

    fields: ['country', 'agr', 'ind', 'ser'],
    data: [
        { country: 'Khánh',     agr: 6000000, ind: 2995787, ser: 12500746},
        { country: 'Thái',   agr: 918138, ind: 3611671, ser: 3792665},
        { country: 'Tài',   agr: 71568,  ind: 1640091, ser: 4258274},
        { country: 'Viêt',      agr: 17084,  ind: 512506,  ser: 1910915},
        { country: 'Sình',  agr: 78856,  ind: 727906,  ser: 1215198}
    ]
});