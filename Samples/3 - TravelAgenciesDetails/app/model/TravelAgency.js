
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
            url: 'https://sapes1.sapdevcenter.com/sap/opu/odata/IWBEP/RMTSAMPLEFLIGHT_2/TravelAgencyCollection',
            username: '...',
            password: '...', 
            withCredentials: true
        }
    }
});

