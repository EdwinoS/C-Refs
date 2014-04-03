Ext.define('CRefs.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    itemId: 'viewport',
    items: [
        {
            region: 'west',
            border: true,
            split: true,
            width: 220,
            minWidth: 150,
            maxWidth: 400,
            collapsible: true,
            animCollapse: true,
            title: 'C References',
            itemId: 'treepanel',
            titleCollapse: true,
            tbar: [
                {
                    xtype: 'triggerfield',
                    flex:1,
                    emptyText: 'Search Field',
                    trigger1Cls: Ext.baseCSSPrefix + 'form-search-trigger'
                }
            ],
            items:[
                {
                    xtype: 'treepanel',
                    store: 'CRefs.store.Indexes',
                    rootVisible: false
                }
            ]
        },
        {
            region: 'center',
            xtype: 'tabpanel',
            layout: 'fit',
            itemId: 'centerpanel',
            defaults: {
                closable: true
            },
            tabBar: {
                defaults : {
                    flex  : 1
                }
            },
            
            items: [
                {
                    title: 'Home',
                    closable: false,
                    tabConfig: {
                        width: 65,
                        flex: 0
                    },
                    items:[
                        {
                            html: 'Home Screen'
                        }
                    ]
                },
                {
                    title: 'Tab 2',
                    items:[
                        {
                            html: 'Screen 2'
                        }
                    ]
                },
                {
                    title: 'Tab 3',
                    items:[
                        {
                            html: 'Screen 3'
                        }
                    ]
                }
            ]
        }
    ]
    
});