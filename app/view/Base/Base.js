Ext.define('MyApp.view.Base.Base', {
    extend: 'Ext.app.Controller',
    views: [
        'MyApp.view.main.Main'
    ],
    init: function() {
        this.addRef([{
            ref: 'main',
            selector: '[xtype=app-main]'
        }]);
        this.callParent();
    },
    /**
     * Cleans up center view main region and adds new component based on passed config object
     * @param {Object} config
     */
    addContentToCenterRegion: function( config ) {
        var view = this.getMain(),
            center = view.down( '#center' ),
            cmp = center.down( '[xtype=' + config.xtype + ']' );
        // check if the current view is the target view
        if( !cmp ) {
            // remove all content
            center.removeAll();
            // add content
            cmp = center.add( config );
        }
        return cmp;
    }
});