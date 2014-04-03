/**
 * Objeto responsavel por carregar e armazenar os dados estaticos que serão utilizados pela aplicação,
 * pois como a aplicação deverar funcionar sem um servidor HTTP, não é vivavel a utilização de
 * requisições AJAX diretamente pelo EXTJS para carregar tais dados.
 */

dataLoader = {
    dataDir: 'App/data/',

    dataContents: [
        'Indexes'
    ],
    
    data: {},

    loadData: function (index) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.dataDir+index+'.js';
        head.appendChild(script);
    },

    getDataContent: function (index){
        if(this.data[index]){
            return this.data[index];
        }
        return {};
    },

    dataDefine: function (index, data){
        if(!this.data[index]){
            this.data[index] = data;
        }
    },

    init: function (){
        for (var index in this.dataContents){
            this.loadData(this.dataContents[index]);
        }
    }
};

dataLoader.init();