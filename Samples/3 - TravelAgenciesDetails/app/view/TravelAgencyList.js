
// define a List to display Travel Agencies
Ext.define('App.view.TravelAgencyList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.travelagencylist',

    config: {
        grouped: true,
        title: 'Travel Agencies',
        itemTpl: '{Name}'
    }
});


