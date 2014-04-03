Ext.define('CRefs.store.Indexes', {
    extend: 'Ext.data.TreeStore',
    storeId: 'myStore',
    proxy: {
        type: 'memory',
        data : dataLoader.getDataContent('Indexes'),
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    root: {
        text: 'Root',
        expanded: true
    }
});