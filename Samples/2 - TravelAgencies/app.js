

Ext.application({
    requires: ['App.store.TravelAgencies', 'App.view.TravelAgencyList'],

    launch: function () {

        // create a store. It autoLoads the TravelAgencies collection from SAP Gateway
        var store = Ext.create('App.store.TravelAgencies');

        // create a list view and bind it to the store
        Ext.create('App.view.TravelAgencyList', {
            fullscreen: true,
            store: store
        });
    }

});

