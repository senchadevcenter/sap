
// define the TravelAgency model
Ext.define('App.model.TravelAgency', {
    extend: 'Ext.data.Model',
    requires: 'Ext.data.proxy.OData',

    config: {
        // define the fields. the default type is string
        fields: [
          { name: "TravelAgencyID" },
          { name: "Name" },
          { name: "Street" },
          { name: "POBox" },
          { name: "PostalCode" },
          { name: "City" },
          { name: "Country" },
          { name: "Region" },
          { name: "TelephoneNumber" },
          { name: "URL" },
          { name: "LanguageCode" },
          { name: "LocalCurrencyCode" }
        ],

        proxy: {
            type: 'odata',
            url: 'http://gw.esworkplace.sap.com/sap/opu/odata/IWBEP/RMTSAMPLEFLIGHT_2/TravelAgencyCollection',
            withCredentials: true,
            username: 'GW@ESW',
            password: 'ESW4GW'
        }
    }
});

