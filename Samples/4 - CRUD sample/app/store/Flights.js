Ext.define('App.store.Flights', {
    extend: 'Ext.data.Store',
    requires: 'App.model.Flight',
    config: {
        model: 'App.model.Flight'
    }
});