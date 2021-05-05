module.exports = function(app) {
  const service = require('../service/CityService')

  app.route('/cities/:id').get(service.getCityData);
}

