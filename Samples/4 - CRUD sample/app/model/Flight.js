Ext.define('App.model.Flight', {
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
        }],

        proxy: {
            type: 'odata',
            withCredentials: true,
            username: 'GW@ESW',
            password: 'ESW4GW',
            url: 'http://gw.esworkplace.sap.com/sap/opu/odata/IWBEP/RMTSAMPLEFLIGHT_2/FlightCollection'
        }
    }
});