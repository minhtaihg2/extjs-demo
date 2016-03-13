/**
 * Demonstrates usage of a border layout.
 */
Ext.define('MyApp.view.main.Main', {
  extend: 'Ext.panel.Panel',
  xtype: 'app-main',
  requires: [
    'Ext.layout.container.Border',
    'MyApp.view.main.AppHeader',
    'Ext.plugin.Viewport'
  ],
  layout: 'border',
  bodyBorder: false,
  controller : 'main',
  defaults: {
    collapsible: true,
    split: true,
    bodyPadding: 10
  },
  plugins: 'viewport',
  header : {
    height : 45,
    xtype: 'appHeader',
    frame: true
  },
  items: [
    {
      title: 'Navigation',
      region:'west',
      floatable: false,
      margin: '5 0 0 0',
      width: 245,
      minWidth: 100,
      maxWidth: 250,
      html: '<p>Secondary content like navigation links could go here</p>'
    },
    {
      title: 'Main Content',
      collapsible: false,
      region: 'center',
      margin: '5 0 0 0',
      html: '<h2>Main Page</h2><p>This is where the main content would go</p>'
    }
  ]

});