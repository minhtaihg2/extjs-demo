Ext.define('MyApp.view.main.AppHeader', {
  extend: 'Ext.Container',
  xtype: 'appHeader',
  title: 'Header',

  requires: [
    'MyApp.view.main.HeaderToolBar',
    'MyApp.view.main.LogoutForm',
    'MyApp.view.main.AppHeaderController'
  ],
  height: 45,
  layout: 'border',
  controller: 'appHeader',
  items: [{
    region: 'west',
    xtype: 'panel',
    width: 245,
    items: [{
      xtype: 'box',
      width: 245,
      height: 45,
      id: 'logo',
      autoEl: {
        tag: 'img',
        src: 'http://mayxaygiochaviendong.com/wp-content/uploads/2015/09/Gi%C3%B2-l%E1%BB%A5a1.jpg',
        //src: Ext.get('userHeadImg').getValue() ,
        style: {
          width: '245px',
          height: '45px'
        }
      }
    }]
  }, {
    region: 'center',
    bodyStyle: {
      background: 'white'
    },
    html: 'Welcome to GioCha Application',
    style :{
      padding : '10px 0px 0px 10px',
      background : 'white'
    }
  }, {
    xtype: 'panel',
    region: 'east',
    width: 480,
    height: 45,
    layout: 'border',

    items: [{
      region: 'center',
      xtype: 'panel',
      layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
      },
      items: [{
        flex: 1,
        xtype: 'apptoolbar'
      }]
    }, {
      region: 'east',
      xtype: 'toolbar',
      id: 'appHeader-toolbar-userHead',
      width: 50,
      items: [{
        xtype: 'box',
        width: 32,
        height: 32,
        id: 'userHeadBox',
        // cls: 'userProfilePic',
        autoEl: {
          tag: 'img',
          src: 'http://assets.rollingstone.com/assets/images/story/steve-jobs-rolling-stones-2003-interview-20111006/square.jpg',
          //src: Ext.get('userHeadImg').getValue() ,
          style: {
            width: '32px',
            height: '32px',
            borderRadius: '44px'
          }
        }

      }]
    }]
  }],

  initComponent: function () {
    document.title = 'My application';
    this.callParent();
  }
});
