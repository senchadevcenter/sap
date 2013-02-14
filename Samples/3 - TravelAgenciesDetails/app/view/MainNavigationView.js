Ext.define('App.view.MainNavigationView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainnavigationview',

    config: {
        fullscreen: true,

        // we would like a navigation bar on top for title and back button
        navigationBar: {
            docked: 'top'
        }

    }
});