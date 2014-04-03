Ext.define('CRefs.controller.IndexesTreepanel', {
    extend: 'Ext.app.Controller',

    views: [
        'CRefs.view.IndexesTreepanel'
    ],

    init: function() {
        this.control({
            "indexespanel": {
                itemclick: this.selectIndex
            }
        });
    },

    selectIndex: function (component, record, item, index){
        if(record.get('leaf')){
            console.log(record.raw.itemIndex, record);
        }

    }

});