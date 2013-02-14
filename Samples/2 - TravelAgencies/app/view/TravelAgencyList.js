
// define a List to display Travel Agencies
Ext.define('App.view.TravelAgencyList', {
    extend: 'Ext.dataview.List',

    config: {
        grouped: true,
        itemTpl: '{Name}'
    }
});


