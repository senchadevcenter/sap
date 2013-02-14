
Ext.application({
    name: 'App',

    requires: ['App.model.Booking', 'App.store.Flights'],

    launch: function () {

        var flights = Ext.create('App.store.Flights'),
            today = Ext.Date.format(new Date(), 'Y-m-d\\TH:i:s'),
            filter = Ext.String.format(
                "(AirLineID eq 'AA') and (FlightDate gt datetime'{0}')",
                today
            );

        // load future flights for AirLine AA
        flights.load({
            params: {
                // select future flights: FlightDate > today
                // you can only create bookings in future flights
                $filter: filter
            },
            callback: function (records) {
                var flight = records[0];

                var booking;

                booking = Ext.create('App.model.Booking', {
                    AirLineID: flight.get('AirLineID'),
                    FlightConnectionID: flight.get('FlightConnectionID'),
                    FlightDate: flight.get('FlightDate'),
                    CustomerID: '00004274',
                    TravelAgencyID: '00000087',
                    PassengerName: 'Joe Picard'
                });

                booking.save(function (record, operation) {
                    if (operation.wasSuccessful()) {
                        console.log('Booking created. Id:' + record.get('BookingID'));
                    } else {
                        console.log('Create booking failed');
                    }
                });
            }
        });
    }

});

