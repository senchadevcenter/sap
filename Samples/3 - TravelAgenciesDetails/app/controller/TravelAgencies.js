Ext.define('App.controller.TravelAgencies', {
    extend: 'Ext.app.Controller',

    config: {

        views: ['TravelAgencyDetails'],

        // define a reference to the main nav view
        refs: {
            navView: 'mainnavigationview'
        },

        // define which event handlers should be invoked
        control: {
            'travelagencylist': {
                itemtap: 'onTravelAgencyListItemTap'
            }
        }
    },

    onTravelAgencyListItemTap: function (list, index, target, record) {

        // this.getNavView is an automatically created getter for refs.navView
        var navView = this.getNavView(),   
            name = record.get('Name');

        navView.push({
            xtype: 'travelagencydetails',
            title: name,
            record: record
        });
    }

});