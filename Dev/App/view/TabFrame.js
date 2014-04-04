Ext.define('CRefs.view.TabFrame',{
    extend: 'Ext.ux.IFrame',
    alias: 'widget.tabframe',
    framesDir: 'Frames/',

    frameName: '',

    initComponent: function (){
        this.src = this.framesDir+this.frameName+'.html';
        this.callParent(arguments);
    }
});
