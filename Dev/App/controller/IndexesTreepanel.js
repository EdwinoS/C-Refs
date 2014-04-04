Ext.define('CRefs.controller.IndexesTreepanel', {
    extend: 'Ext.app.Controller',

    views: [
        'CRefs.view.IndexesTreepanel'
    ],

    refs: [
        {
            ref: 'indexesPanel',
            selector: 'indexespanel'
        },
        {
            ref: 'centerPanel',
            selector: '#centerpanel'
        }
    ],

    init: function() {
        this.control({
            "indexespanel": {
                itemclick: this.selectIndex
            }
        });
    },

    getTab: function (index){
        var me = this,
            central = me.getCenterPanel(),
            tab = central.items.findBy(function (item, id) {
                if(index === id)
                    return item;
                else
                    return false;
            });
        return tab;
    },

    selectIndex: function (component, record, item, index){
        var me = this;
        
        if(record.get('leaf')){
            var central = me.getCenterPanel(),
                tab = me.getTab(record.raw.itemIndex);

            if(!tab){
                central.add({
                    title: record.raw.itemIndex,
                    itemId: record.raw.itemIndex,
                    items: [{
                            html: record.raw.itemIndex
                    }]
                });
            }
            central.setActiveTab(record.raw.itemIndex);
        }

    }

});