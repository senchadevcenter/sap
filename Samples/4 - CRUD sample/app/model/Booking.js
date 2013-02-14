Ext.define('App.model.Booking', {
    extend: 'Ext.data.Model',

    config: {

        fields: [{
            name: 'AirLineID',
            type: 'string'
        }, {
            name: 'FlightConnectionID',
            type: 'string'
        }, {
            name: 'FlightDate',
            type: 'string'
        },
    {
        name: 'BookingID',
        type: 'string',
        defaultValue: ''
    },
    {
        name: 'CustomerID',
        type: 'string'
    }, {
        name: 'TravelAgencyID',
        type: 'string'
    }, {
        name: 'PassengerName',
        type: 'string'
    }, {
        name: 'CustomerType',
        type: 'string'
    }, {
        name: 'Smoker',
        type: 'boolean'
    }, {
        name: 'LuggageWeight',
        type: 'float'
    }, {
        name: 'WeightUnit',
        type: 'string'
    }, {
        name: 'Invoice',
        type: 'boolean'
    }, {
        name: 'FlightClass',
        type: 'string'
    }, {
        name: 'PriceInForeignCurrency',
        type: 'float'
    }, {
        name: 'ForeignCurrencyCode',
        type: 'string'
    }, {
        name: 'PriceInLocalCurrency',
        type: 'float'
    }, {
        name: 'LocalCurrencyCode',
        type: 'string'
    }, {
        name: 'SalesOfficeID',
        type: 'string'
    }, {
        name: 'BookingDate',
        type: 'string'
    }, {
        name: 'TravelAgencyID',
        type: 'string'
    }, {
        name: 'Cancelled',
        type: 'boolean'
    }
    , {
        name: 'Reserved',
        type: 'boolean'
    }
    , {
        name: 'PassengerName',
        type: 'string'
    }, {
        name: 'Title',
        type: 'string'
    }, {
        name: 'PassengerDateOfBirth',
        type: 'string'
    }],


        proxy: {
            type: 'odata',
            url: "http://gw.esworkplace.sap.com/sap/opu/odata/IWBEP/RMTSAMPLEFLIGHT_2/BookingCollection",
            withCredentials: true,
            username: 'GW@ESW',
            password: 'ESW4GW'

        }
    }
});