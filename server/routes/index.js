var workers = require('../workers');


module.exports = function(app, express) {
	app.get('/api/users/:user_id/location/:location_id', function(req,res){
		// Route for getting optimal path for a particular user/location list
		workers.locationFetcher('customer_locations.xlsx');

	});
};