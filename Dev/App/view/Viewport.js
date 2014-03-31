Ext.define('CRefs.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    itemId: 'viewport',
    items: [
        {
            xtype: 'window',
            title: 'Hello World',
            height: 200,
            width: 400,
            layout: 'fit',
            autoShow: true,
            items: {
                html: 'Olá Mundo!!!'
            }
        }
    ]
    
});