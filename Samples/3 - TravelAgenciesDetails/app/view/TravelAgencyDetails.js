// define a FormPanel to display Travel Agency details
Ext.define('App.view.TravelAgencyDetails', {
    extend: 'Ext.form.Panel',
    alias: 'widget.travelagencydetails',

    config: {
        title: 'Travel Agency',
        items:  [{
            xtype: 'fieldset',
            title: 'Address', // title of fieldset

            // define defaults that apply to all items in this container
            defaults: {
                xtype: 'textfield',
                readOnly: true,
                labelWidth: '30%'
            },
            items: [
                {
                    name: 'Name',
                    label: 'Name'
                }, {
                    name: 'Street',
                    label: 'Street'
                }, {
                    name: 'City',
                    label: 'City'
                }, {
                    name: 'Country',
                    label: 'Country'
                }
            ]
        }]
    }
});


