
const database = require('../config/database.js')

exports.getCityData = function(req, res) {
  var id = req.params.id;

  database.select('*').table('cities').where({id:id}).then(city => {
    res.status(200).json(city)
  }).catch(error => {
    console.log(error)
  })
}

