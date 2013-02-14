
// define a store to load a collection TravelAgency records
Ext.define('App.store.TravelAgencies', {
    extend: 'Ext.data.Store',

    // the class depends on the TravelAgency model
    requires: 'App.model.TravelAgency',

    config: {
        // in the model config we use the TravelAgency model, 
        // that's why we need to define it as a dependency.
        model: 'App.model.TravelAgency',

        // automatically load the records when store is created
        autoLoad: true,

        // perform client-side sorting on field Name
        sorters: 'Name',

        // configure grouping
        grouper: {
            // group by the first letter of Name field
            groupFn: function (record) {
                return record.get('Name')[0];
            }
        }
    }
});



