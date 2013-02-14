

Ext.application({
    name: 'App',

    // define required stores, views and controllers
    stores: ['TravelAgencies'],
    views: ['MainNavigationView', 'TravelAgencyList'],
    controllers: ['TravelAgencies'],

    launch: function () {

        // create a store and navigation view
        var store = Ext.create('App.store.TravelAgencies'),
            view = Ext.create('App.view.MainNavigationView');

        // push a travel agency list into the Navigation view
        view.push({
           xtype: 'travelagencylist',
           store: store
        });
    }

});

