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
            url: 'https://sapes1.sapdevcenter.com/sap/opu/odata/IWBEP/RMTSAMPLEFLIGHT_2/FlightCollection',
            username: '...',
            password: '...',
            withCredentials: true
        }
    }
});