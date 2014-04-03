Ext.application({
    //Namespace da aplicação
    name: 'CRefs',

    //Pasta onde se encontra os arquivos da aplicação
    appFolder: 'App/',

    controllers:[
        'CRefs.controller.IndexesTreepanel'
    ],

    stores: [
        'CRefs.store.Indexes'
    ],

    //Define o arquivo App/view/Viewport.js como o viewport da aplicação
    autoCreateViewport: true
});